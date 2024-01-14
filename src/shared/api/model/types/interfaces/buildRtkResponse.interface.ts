import { EResponseType } from '@/shared/api';

export interface IBuildRtkResponse<T> {
	type: EResponseType;
	data?: T;
	error?: string;
	meta?: unknown;
}
