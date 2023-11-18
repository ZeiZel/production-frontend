import { Router, Response } from 'express';
import { LoggerService } from '../logger/logger.service';
import { IControllerRoute } from './route.interface';
import { injectable } from 'inversify';
import 'reflect-metadata';
import { ILogger } from '../logger/logger.interface';

// прототип для всех контроллеров
@injectable()
export abstract class BaseController {
	private readonly _router: Router;
	private logger: ILogger;

	constructor(logger: ILogger) {
		this.logger = logger;
		this._router = Router();
	}

	get router() {
		return this._router;
	}

	// отправка сообщения
	public send<T>(res: Response, code: number, message: T) {
		res.type('application/json');
		return res.status(code).json(message);
	}

	// быстрая версия отправки
	public ok<T>(res: Response, message: T) {
		return this.send<T>(res, 200, message);
	}

	// ответ реализован
	public created(res: Response) {
		return res.sendStatus(201);
	}

	// тут нам нужно подвязывать роуты к контроллеру
	protected bindRoutes(routes: IControllerRoute[]): void {
		for (const route of routes) {
			this.logger.log(`${route.method} ${route.path}`);
			// привязываем контекст посредников, чтобы он оставался внутри них самих
			const middleware = route.middlewares?.map((mw) => mw.execute.bind(mw));
			const handler = route.func.bind(this); // контекст роута привязываем к контексту контроллера
			// если будут middlewares, то выполняем сначала их, а потом основной хендлер
			const pipeline = middleware ? [...middleware, handler] : handler;
			this.router[route.method](route.path, pipeline); // вызываем функцию по роуту
		}
	}
}
