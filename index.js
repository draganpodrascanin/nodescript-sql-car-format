import mysql from 'mysql2/promise.js';
import dotenv from 'dotenv';
import formatToObject from './formatToObject.js';
dotenv.config({ path: 'config.env' });

const connectToDB = async () => {
	let connection;
	try {
		connection = await mysql.createConnection({
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
		});
		console.log('connected to db .. ', connection.threadId);
	} catch (err) {
		console.log("couldn't connect to db..", err);
	}

	const [rows, fields] = await connection.execute(
		'SELECT make, COUNT(model) as NUM_OF_MODEL FROM cars GROUP BY make;'
	);

	console.log('rows  == \n', rows);
	console.log('fields  == \n', fields[0].name);

	const obj = formatToObject(rows, fields);
	console.log('OBJECT === ', obj);
	return connection;
};

const connection = connectToDB();
// process.exit(1);
