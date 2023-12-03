import fs from 'fs';
import http from 'http';
import https from 'https';
import path from 'path';
import jsonServer from 'json-server';
import { IUser } from '../src/entities/User/model/types/user.interface';

/**
 * Сертификаты для https-сервера
 * */
const options = {
	key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
	cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
};

/**
 * инстанциируем json-сервер
 * */
const server = jsonServer.create();

/**
 * инстанциируем роутер по файлу с данными
 * */
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

/**
 * Для имитации "реального" апи добавлена небольшая задержка для возврата данных
 * */
server.use(async (req, res, next) => {
	await new Promise((res) => {
		setTimeout(res, 800);
	});
	next();
});

/**
 * эндпоинт авторизации пользователя
 * */
server.post('/login', (req, res) => {
	try {
		const { username, password } = req.body;
		const db = JSON.parse(
			fs.readFileSync(path.resolve(__dirname, 'db.json'), { encoding: 'utf-8' }),
		);
		const { users = [] } = db;

		const userFromBd = users.find(
			(user: IUser) => user.username === username && user.password === password,
		);

		if (userFromBd) {
			return res.json(userFromBd);
		}

		return res.status(403).json({ message: 'User not found' });
	} catch (e) {
		if (e instanceof Error) {
			console.log(e);
			return res.status(500).json({ message: e.message });
		}
	}
});

/**
 * гуард авторизации пользователя
 * просто проверяет заголовки авторизации пользователя в запросе
 * */
server.use((req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({ message: 'AUTH ERROR' });
	}

	next();
});

server.use(router);

/**
 * старт сервера
 * */
const HTTPS_PORT = 8443;
const HTTP_PORT = 8000;

const httpsServer = https.createServer(options, server);
const httpServer = http.createServer(server);

httpsServer.listen(HTTPS_PORT, () => {
	console.log(`https server is running on ${HTTPS_PORT} port`);
});

httpServer.listen(HTTP_PORT, () => {
	console.log(`http server is running on ${HTTP_PORT} port`);
});
