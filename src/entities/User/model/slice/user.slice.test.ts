import { IUser, userActions, userReducers } from '@/entities/User';
import { UserSchema } from '../types';

describe('User Slice Suite', () => {
	test('set user into state', () => {
		const state: UserSchema = {
			user: {
				id: '12231231',
				avatar: 'asdasd',
				features: {
					isAppRedesigned: false,
					isCounterEnabled: false,
					isArticleRatingEnabled: false,
				},
				password: 'asdasd',
				username: 'Alex',
				roles: ['admin'],
			},
		};

		expect(userReducers(state, userActions.setUser(state.user as IUser))).toEqual({
			user: state.user,
		});
	});

	test('set user undefined', () => {
		const state: UserSchema = {
			user: undefined,
		};

		expect(userReducers(undefined, userActions.setUser(state.user as IUser))).toEqual({
			user: undefined,
		});
	});
});
