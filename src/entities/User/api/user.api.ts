import { rtkApi } from '@/shared/api';
import { IGetUserRequest, IGetUserResponse } from '../model/types';

export const { endpoints: userEndpoints, useGetUserQuery } = rtkApi.injectEndpoints({
	endpoints: ({ query, mutation }) => ({
		getUser: query<IGetUserResponse, IGetUserRequest>({
			query: ({ id }) => ({
				url: '/user/' + id,
			}),
		}),
	}),
});
