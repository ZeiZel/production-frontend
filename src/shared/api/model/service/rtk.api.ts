import { createApi } from '@reduxjs/toolkit/query/react';
import { baseFetchQuery } from '../service/fetchBase.api';

/** базовый RTK Api для реализации АПИ через injectEndpoints */
export const rtkApi = createApi({
	reducerPath: 'api',
	baseQuery: baseFetchQuery({
		baseUrl: __API__,
	}),
	endpoints: () => ({}),
});
