import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/react';
import { onErrorMiddleware } from '@/shared/api/lib/middlewares/onError.middleware';
import {
	EMiddlewareStage,
	IFetchBaseApi,
	IFetchBaseApiClientProps,
	TMiddlewareFn,
} from '../types/interfaces/fetchBaseApi.interface';

/**
 * Класс для инстанциирования менеджера запросов в приложении
 * @baseUrl {string} ссылка на базовый запрос
 * @middlewares {IMiddleware[]} посредники для обработки данных
 * */
class FetchBaseApiClient implements IFetchBaseApiClientProps {
	private baseUrl: string;
	private middlewares: Record<EMiddlewareStage, TMiddlewareFn<any, any>[]>;

	constructor(baseUrl: string, middlewares: Record<EMiddlewareStage, TMiddlewareFn<any, any>[]>) {
		this.baseUrl = baseUrl;
		this.middlewares = middlewares;
	}

	/** функция применения middleware */
	private applyMiddlewares<T>(
		stage: EMiddlewareStage,
		config: IFetchBaseApi,
		data: unknown = {},
	): T | unknown {
		switch (stage) {
			case EMiddlewareStage.START:
				return this.middlewares[stage].reduce(
					(requestConfig, middleware) => middleware(requestConfig, data),
					config,
				);
			case EMiddlewareStage.LOADING:
				this.middlewares[stage].forEach((middleware) => middleware(config, data));
				return undefined;
			case EMiddlewareStage.SUCCESS:
			case EMiddlewareStage.ERROR:
				return this.middlewares[stage].reduce(
					(result, middleware) => middleware(result, data),
					config,
				);
			default:
				return config;
		}
	}

	/** метод для формирования строки параметров */
	private buildUrlWithParams(url: string, params?: Record<string, unknown>): string {
		if (params) {
			const paramsList = Object.entries(params)
				.map(([key, value]) => `${key}=${value ?? ''}`)
				.join('&');
			return `${url}?${paramsList}`;
		}
		return url;
	}

	/** обработка разных форматов ответов */
	private async handleResponse<T>(
		response: Response,
		type: 'json' | 'blob' | 'none' = 'json',
	): Promise<T> {
		if (response instanceof Response) {
			switch (type) {
				case 'blob':
					return (await response.blob()) as T;
				case 'none':
					return response as T;
				case 'json':
				default: {
					const data = await response.text();
					return data !== '' ? JSON.parse(data) : {};
				}
			}
		}
		return response;
	}

	/** метод совершения запроса */
	private async fetch<T>(
		url: string,
		{ method, headers, mode, credentials, type, body, ...args }: IFetchBaseApi,
	): Promise<T> {
		const response = await fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
				...headers,
			},
			mode: mode || 'cors',
			credentials: credentials || 'include',
			body: body ? JSON.stringify(body) : undefined,
			...args,
		});

		return this.handleResponse<T>(response, type);
	}

	/** функция для совершения запроса */
	public async fetchBaseApi<T>(config: IFetchBaseApi): Promise<T | undefined> {
		const urlWithParams = this.buildUrlWithParams(
			config.url.includes(this.baseUrl) ? config.url : `${this.baseUrl}${config.url}`,
			config.params,
		);

		const requestConfig = this.applyMiddlewares<IFetchBaseApi>(EMiddlewareStage.START, {
			...config,
			url: urlWithParams,
		}) as IFetchBaseApi;

		try {
			this.applyMiddlewares(EMiddlewareStage.LOADING, requestConfig);
			const response = await this.fetch<T>(urlWithParams, requestConfig);
			this.applyMiddlewares(EMiddlewareStage.SUCCESS, requestConfig, response);
			return response;
		} catch (error) {
			if (error instanceof Error) {
				this.applyMiddlewares(EMiddlewareStage.ERROR, requestConfig, error);
				throw new Error(`Произошла ошибка запроса данных ${error.message}`);
			}
		}
	}

	/** функция базового запроса внутри RTK Query */
	public baseRtkFetchQuery =
		({ baseUrl }: { baseUrl: string }): BaseQueryFn<IFetchBaseApi> =>
		async ({
			url,
			method,
			headers,
			params,
			body,
			type = 'json',
			...args
		}): Promise<QueryReturnValue<unknown, unknown, object>> => {
			try {
				const response = await this.fetchBaseApi({
					url: baseUrl + url,
					headers,
					params,
					method,
					type,
					body,
					...args,
				});

				return { data: response };
			} catch (e) {
				if (e instanceof Error) {
					return { error: e.message };
				}
			}

			return { error: 'No data was found' };
		};

	/** метод для добавления нового middleware */
	public addMiddleware(
		stage: EMiddlewareStage,
		middleware: TMiddlewareFn<any, any>,
	): FetchBaseApiClient {
		this.middlewares[stage].push(middleware);
		return this;
	}
}

/** функция для совершения запросов на сервер */
export const fetchConfig = new FetchBaseApiClient(__API__, {
	[EMiddlewareStage.START]: [onErrorMiddleware],
	[EMiddlewareStage.LOADING]: [onErrorMiddleware],
	[EMiddlewareStage.SUCCESS]: [onErrorMiddleware],
	[EMiddlewareStage.ERROR]: [onErrorMiddleware],
}).addMiddleware(EMiddlewareStage.START, onErrorMiddleware);
