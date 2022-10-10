module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		  host: env('RDS_HOSTNAME', ''),
			port: env.int('RDS_PORT', undefined),
			database: env('RDS_DB_NAME', ''),
			user: env('RDS_USERNAME', ''),
			password: env('RDS_PASSWORD', ''),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
