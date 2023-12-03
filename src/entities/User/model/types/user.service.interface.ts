import { IUser } from './user.interface';

export interface IGetUserRequest {
	id: string | number;
}
export interface IGetUserResponse extends IUser {}
