import compression from 'compression';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import httpStatus from 'http-status';
import morgan from 'morgan';
import { ErrorResponse } from './core';

const app = express();

// init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// init db
import '../src/dbs/mysql';

// init routes
app.use('/ping', (_req, res) => {
	res.json({
		message: 'Hi There 🥳🥳🥳',
	});
});

// handling error
app.use((_req, _res, next) => {
	next(new ErrorResponse('Route not found!!', httpStatus.NOT_FOUND));
});

app.use(
	(
		error: ErrorResponse,
		_request: Request,
		res: Response,
		_next: NextFunction,
	) => {
		const statusCode = error.status || 500;

		return res.status(statusCode).json({
			status: 'error',
			code: statusCode,
			message: error.message || 'Internal Server Error',
		});
	},
);

export default app;
