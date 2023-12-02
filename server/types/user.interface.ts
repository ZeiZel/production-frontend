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

/** список фич, которые активировал пользователь */
export interface IFeatures {
	isArticleRatingEnabled: boolean;
	isCounterEnabled: boolean;
	isAppRedesigned?: boolean;
}

/** настройки пользователя */
export interface IJsonSettings {
	isArticlesPageWasOpened: boolean;
	theme?: string;
}
