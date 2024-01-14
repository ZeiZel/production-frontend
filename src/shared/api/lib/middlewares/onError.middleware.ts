import { TMiddlewareFn } from '@/shared/api';

export const onErrorMiddleware: TMiddlewareFn<{ message: string }, Error> = (
	config,
	data,
): { message: string } => {
	console.error(data?.message);
	return { message: data?.message || 'Произошла непредвиденная ошибка' };
};
