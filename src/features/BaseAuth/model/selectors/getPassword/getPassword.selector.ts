import { StateSchema } from '@/shared/types';

export const getPassword = (state: StateSchema) => state?.baseAuth?.password || '';
