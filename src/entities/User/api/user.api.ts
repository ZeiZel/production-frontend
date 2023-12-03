import { rtkApi } from '@/shared/api';
import { IGetUserRequest, IGetUserResponse } from '../model/types';

const userApi = rtkApi.injectEndpoints({
	endpoints: ({ query, mutation }) => ({
		getUser: query<IGetUserResponse, IGetUserRequest>({
			query: ({ id }) => ({
				url: '/user/' + id,
			}),
		}),
	}),
});

export const { useGetUserQuery } = userApi;
