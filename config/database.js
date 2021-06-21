module.exports = {
	development: {
		username: process.env.DB_USERNAME || 'root',
		password: process.env.DB_PASSWORD || '',
		database: process.env.DB_NAME || 'basic_home_loan',
		host: process.env.DB_HOST || 'localhost',
		dialect: process.env.DB_DIALECT || 'mysql',
		port: process.env.DB_PORT || 3306,
		logging: true,
		pool: {
			max: 5,
			min: 1,
			idle: 30000,
		},
	},
	production: {
		username: 'root',
		password: '',
		database: 'basic_home_loan',
		host: 'localhost',
		dialect: 'mysql',
		port: 3306,
		pool: {
			max: 5,
			min: 1,
			idle: 30000,
		},
	},
};