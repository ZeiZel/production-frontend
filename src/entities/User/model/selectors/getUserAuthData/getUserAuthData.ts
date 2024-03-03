import { StateSchema } from '@/shared/types';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
