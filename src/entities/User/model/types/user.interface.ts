import { IFeatures } from '@/shared/lib';
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
	features: IFeatures;
	avatar: string;
	jsonSettings?: IJsonSettings;
}
