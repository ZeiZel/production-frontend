import { StateSchema } from '@/shared/types';

export const getLogin = (state: StateSchema) => state.baseAuth?.username || '';
