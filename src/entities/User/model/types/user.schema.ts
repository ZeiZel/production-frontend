import { IUser } from './user.interface';

export interface UserSchema {
	user?: IUser;
	isUserAuth?: boolean;
	authData: unknown;
}
