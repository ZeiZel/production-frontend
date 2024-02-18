import { RequestType } from '../../../types/types/requestType.type';
import { IFetchBaseApi } from '../types/interfaces/fetchBaseApi.interface';

/**
 * функция-обёртка для запросов внутри нашего проекта
 * @param {IFetchBaseApi} принимаемые параметры fetch-запроса
 * */
export const fetchBaseApi = async <T>({
	url,
	params,
	mode = 'cors',
	credentials = 'include',
	headers,
	method = RequestType.GET,
	body,
	type = 'json',
	...args
}: IFetchBaseApi): Promise<T> => {
	let urlWithParams = url.includes(__API__) ? url : `${__API__}${url}`;

	/* если мы передали параметры в запрос, то они подставятся в url запроса */
	if (params) {
		const paramsList = Object.entries(params)
			.map(([key, value]) => `${key}=${value ?? ''}`)
			.join('&');
		urlWithParams += `?${paramsList}`;
	}

	return fetch(urlWithParams, {
		method,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			...headers,
		},
		mode,
		credentials,
		body: JSON.stringify(body),
		...args,
	})
		.then(async (response: Response) => {
			if (response instanceof Response) {
				switch (type) {
					case 'blob':
						return response.blob();
					case 'none':
						return response;
					case 'json':
					default: {
						const data = await response.text();
						if (data !== '') {
							return JSON.parse(data);
						}

						return {};
					}
				}
			}

			return response;
		})
		.then((response) => response as T)
		.catch((reject) => {
			throw new Error(`Произошла ошибка запроса данных ${reject}`);
		}) as T;
};
