import { createSelector } from '@reduxjs/toolkit';
import { EUserRole } from '@/entities/User';
import { StateSchema } from '@/shared/types';

export const getUserRole = (state: StateSchema) => state.user.user?.roles;

export const isUserAdmin = createSelector(
	getUserRole,
	(roles) => !!roles?.includes(EUserRole.ADMIN),
);

export const isUserManager = createSelector(
	getUserRole,
	(roles) => !!roles?.includes(EUserRole.MANAGER),
);
