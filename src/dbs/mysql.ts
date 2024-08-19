import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({
	type: 'mysql',
	host: process.env.DB_HOST || 'localhost',
	port: 3306,
	username: process.env.DB_USERNAME || 'root',
	password: process.env.DB_PASSWORD || 'test',
	database: process.env.DB_DATABASE || 'test',
	entities: ['src/models/*.js'],
	logging: true,
	synchronize: true,
});

class Database {
	static instance: Database;

	constructor() {
		this.connect();
	}

	connect(): void {
		myDataSource
			.initialize()
			.then(() => {
				console.log('DB: connected');
			})
			.catch((err) => {
				console.log('DB: Error during initialization', err);
			});
	}

	static getInstance(): Database {
		if (!Database.instance) {
			Database.instance = new Database();
		}

		return Database.instance;
	}
}

export default Database.getInstance();
