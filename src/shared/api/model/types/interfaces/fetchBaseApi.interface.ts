import { RequestType } from '@/shared/types';

export interface IFetchBaseApi extends Omit<RequestInit, 'method' | 'body'> {
	url: string;
	body?: Record<string, unknown> | BodyInit | null | object;
	method?: RequestType;
	headers?: HeadersInit;
	params?: {
		[key: string]: unknown;
	};
	type?: 'json' | 'blob' | 'none';
}
