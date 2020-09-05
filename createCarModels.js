import getObjResponseFromQuery from './getObjResponseFromQuery.js';
import fs from 'fs';

const asyncForEach = async (array, cb) => {
	for (let index = 0; index < array.length; index++) {
		await cb(array[index], index, array);
	}
};

export default async (connection) => {
	const hm = {};

	const [makerRows, fields] = await connection.execute(`
    SELECT * FROM car_makers;
  `);

	await asyncForEach(makerRows, async (maker) => {
		// console.log('MAKER ====== ', maker);

		const res = await getObjResponseFromQuery(
			connection,
			`SELECT DISTINCT model FROM cars WHERE make = "${maker.name}"`
		);

		return (hm[maker.name] = {
			makerId: maker.car_maker_id,
			models: res.model,
		});
		/* hm =
    {
      Audi: {
        makerId:1, 
        models: ['A4', 'A5', ..]
      },
      BMW: {
        makerId:2,
        models: ['3', '5', '7' ..]
      }
    } */
	});

	await connection.execute(`
      CREATE TABLE car_models(
			car_model_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
			name VARCHAR(50) NOT NULL,
			car_maker_id INT NOT NULL,
			FOREIGN KEY (car_maker_id) REFERENCES car_makers(car_maker_id) ON DELETE CASCADE
		);
		`);

	let queryStr = ` INSERT INTO car_models(name, car_maker_id) VALUES \n`;

	for (const maker in hm) {
		if (hm.hasOwnProperty(maker)) {
			const models = hm[maker].models; //Array of car models for this car maker

			models.forEach((model) => {
				queryStr += `("${model}", ${hm[maker].makerId}),\n`;
			});
		}
	}
	queryStr = queryStr.slice(0, -2); // removing last , \n

	fs.writeFileSync('./insert_into_car_models.sql', queryStr);
	try {
		await connection.execute(queryStr);
	} catch (err) {
		console.log(err);
	}
};
