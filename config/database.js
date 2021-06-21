module.exports = {
	development: {
		username: process.env.DB_USERNAME || 'root',
		password: process.env.DB_PASSWORD || '',
		database: process.env.DB_NAME || 'test',
		host: process.env.DB_HOST || 'localhost',
		dialect: process.env.DB_DIALECT || 'mysql',
		port: process.env.DB_PORT || 3306,
		logging: true,
		migrationStorageTableName: 'migrations',
		pool: {
			max: 5,
			min: 1,
			idle: 30000,
		},
	},
	production: {
		user: 'postgres',
		username: 'postgres',
		password: 't1n9x8gTOD',
		database: 'smart_gate_plus',
		host: 'smart-gate-plus-pg.cgkvns734zow.ap-south-1.rds.amazonaws.com',
		dialect: 'postgres',
		port: '5432',
		migrationStorageTableName: 'migrations',
		pool: {
			max: 5,
			min: 1,
			idle: 30000,
		},
	},
};