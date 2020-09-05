import formatToObject from './formatToObject.js';
export default async (connection, query) => {
	const [rows, fields] = await connection.execute(query);
	return formatToObject(rows, fields);
};
