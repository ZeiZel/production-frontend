import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseApi, IFetchBaseApi } from '@/shared/api';

const baseFetchQuery =
	({ baseUrl }: { baseUrl: string }): BaseQueryFn<IFetchBaseApi, unknown, unknown> =>
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
			const response = await fetchBaseApi({
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

/** базовый RTK Api для реализации АПИ через injectEndpoints */
export const rtkApi = createApi({
	reducerPath: 'api',
	baseQuery: baseFetchQuery({
		baseUrl: __API__,
	}),
	endpoints: () => ({}),
});
