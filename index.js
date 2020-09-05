import mysql from 'mysql2/promise.js';
import dotenv from 'dotenv';
import createCarMakerTable from './createCarMakers.js';
import createCarModelsTable from './createCarModels.js';

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
	await connection.execute('DROP  TABLE IF EXISTS car_models');
	await connection.execute('DROP  TABLE IF EXISTS car_makers');

	await createCarMakerTable(connection);
	await createCarModelsTable(connection);
	// createCarModels(connection)
};

connectToDB();
