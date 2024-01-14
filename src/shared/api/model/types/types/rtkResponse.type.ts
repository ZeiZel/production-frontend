import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';
import { IBuildRtkResponse } from '@/shared/api';

export type QueryFnReturnValueType<T> = QueryReturnValue<T, FetchBaseQueryError, unknown>;

export type TBuildRtkResponse = <T>(data: IBuildRtkResponse<T>) => QueryFnReturnValueType<T>;
