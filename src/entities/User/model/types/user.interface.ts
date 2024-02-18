import { IJsonSettings } from './userSettings.interface';

/** список пользователей */
export interface IUserList {
	users: IUser[];
}

/** интерфейс пользователя */
export interface IUser {
	id: string;
	username: string;
	password: string;
	roles: string[];
	avatar: string;
	jsonSettings?: IJsonSettings;
}
