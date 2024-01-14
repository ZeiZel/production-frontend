import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchConfig } from '../service/fetchBase.api';

/** базовый RTK Api для реализации АПИ через injectEndpoints */
export const rtkApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchConfig.baseRtkFetchQuery({
		baseUrl: __API__,
	}),
	endpoints: () => ({}),
});
