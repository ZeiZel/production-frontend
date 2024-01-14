import { EResponseType } from '../../model/const/responseType.const';
import { IBuildRtkResponse } from '../../model/types/interfaces/buildRtkResponse.interface';
import { QueryFnReturnValueType, TBuildRtkResponse } from '../../model/types/types/rtkResponse.type';

/**
 * функция для построения правильного ответа из RTK Api
 * @param {IBuildRtkResponse} args - аргументы, которые были переданы в запрос
 * @returns {QueryFnReturnValueType} response - ответ правильной формы для RTK
 * */
export const buildRtkResponse: TBuildRtkResponse = <T>({
	type = EResponseType.NO_DATA,
	data,
	error,
	meta,
}: IBuildRtkResponse<T>): QueryFnReturnValueType<T> => {
	switch (type) {
		case EResponseType.REJECT:
			return {
				data: undefined,
				error: {
					status: 'CUSTOM_ERROR',
					error: error as string,
				},
				meta: meta || {},
			};
		case EResponseType.FULFILLED:
			return {
				data: data as T,
				error: undefined,
				meta: meta || {},
			};
		case EResponseType.NO_DATA:
		default:
			return {
				data: undefined,
				error: {
					status: 'CUSTOM_ERROR',
					error: 'Произошла непредвиденная ошибка',
				},
				meta: meta || {},
			};
	}
};
