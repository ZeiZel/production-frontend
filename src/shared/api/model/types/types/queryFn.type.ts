import { BaseQueryArg, QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';
import { BaseQueryApi } from '@reduxjs/toolkit/query';
import { IFetchBaseApi, QueryFnReturnValueType } from '@/shared/api';

export type CustomQueryFunction<T, K> = (
	args: K,
	api?: BaseQueryApi,
	extraOptions?: object,
	baseQueryArgs?: BaseQueryArg<
		(
			arg: (arg: IFetchBaseApi) => MaybePromise<QueryReturnValue<unknown, unknown, object>>,
		) => QueryFnReturnValueType<T>
	>,
) => Promise<QueryFnReturnValueType<T>>;
