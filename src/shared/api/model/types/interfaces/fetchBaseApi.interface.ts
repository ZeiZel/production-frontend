import { RequestType } from '@/shared/types';

/** интерфейс конфигурации базового запроса для фетча */
export interface IFetchBaseApi extends Omit<RequestInit, 'method' | 'body'> {
	url: string;
	body?: Record<string, unknown> | BodyInit | null | object;
	method?: RequestType;
	headers?: HeadersInit;
	params?: {
		[key: string]: unknown;
	};
	type?: 'json' | 'blob' | 'none';
}

/** интерфейс функции-посредника, которая выполняет операцию между запросами */
export type TMiddlewareFn<T, K> = (config: IFetchBaseApi, data?: K) => T;

export enum EMiddlewareStage {
	START,
	LOADING,
	SUCCESS,
	ERROR,
}

/** интерфейс класса */
export interface IFetchBaseApiClientProps {
	fetchBaseApi<T>(config: IFetchBaseApi): Promise<T | Error | undefined>;
}
