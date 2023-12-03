import { getUserRole, isUserAdmin, isUserManager } from '@/entities/User';
import { StateSchema } from '@/shared/lib';

describe('getUserRole', () => {
	test('is user', () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				user: {
					roles: ['user'],
				},
			},
		};

		expect(getUserRole(state as StateSchema)).toEqual(['user']);
	});

	test('is manager', () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				user: {
					roles: ['manager'],
				},
			},
		};

		expect(isUserManager(state as StateSchema)).toEqual(true);
	});

	test('is admin', () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				user: {
					roles: ['admin'],
				},
			},
		};

		expect(isUserAdmin(state as StateSchema)).toEqual(true);
	});
});
