const Sequelize = require('sequelize');

const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

console.log('NearByMe', DB_USERNAME, DB_NAME, DB_PASSWORD);

const getConnection = () => {
	let sequelize = null;
	return () => {
		if (sequelize) {
			return sequelize;
		}

		//  const DB_NAME = 'nearbyme';
		//  const DB_USERNAME = 'root';
		// const DB_PASSWORD = '';

		console.log("process.env inside", process.env.PORT);
		try {
			sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
				server: 'localhost',
				dialect: 'mssql'
			});

			sequelize.authenticate().then(() => {}).catch((err) => {
				console.log('mssql error', err);
			});

			return sequelize;
		} catch (err) {
			console.log(`error while connecting db err= ${err}`);
		}
	};
};

module.exports = getConnection();
