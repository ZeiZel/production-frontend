import { UserSchema } from '@/entities/User';
import { rtkApi } from '@/shared/api';

export interface StateSchema {
	user: UserSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkExtraArg {
	api: object;
}
