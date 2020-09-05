import fs from 'fs';
import getObjResFromQuery from './getObjResponseFromQuery.js';

export default async (connection) => {
	const carMakersObj = await getObjResFromQuery(
		connection,
		'SELECT make FROM cars GROUP BY make ORDER BY make;'
	);

	await connection.execute(`
      CREATE TABLE car_makers(
        car_maker_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        name VARCHAR(50) NOT NULL
      );
    `);

	let insertQuery = 'INSERT INTO car_makers(name) \n VALUES \n ';

	carMakersObj.make.forEach((maker, i) => {
		if (carMakersObj.make.length !== i + 1) insertQuery += `("${maker}"),\n`;
		else insertQuery += `("${maker}")\n`;
	});

	fs.writeFileSync('./insert_into_car_makers.sql', insertQuery);

	try {
		const res = await connection.execute(insertQuery);
		return res;
	} catch (err) {
		console.log(err);
	}
};
