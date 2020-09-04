export default (rows, fields) => {
	const obj = {};
	//obj props from fields
	fields.forEach((f) => (obj[f.name] = []));

	//push to obj props propper rows
	rows.forEach((row) => {
		fields.forEach((field) => {
			obj[field.name].push(row[field.name]);
		});
	});

	return obj;
};
