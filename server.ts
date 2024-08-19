import 'dotenv/config';
import app from './src/app';

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

process.on('SIGINT', () => {
	server.close(() => console.log('Exit Server Express'));
});
