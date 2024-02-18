import React from 'react';
import { LoginPageAsync } from '@/pages/LoginPage';
import { getRouteLogin } from '@/shared/const';
import { AppRouteProps } from '../model/types';

enum AuthRoutes {
	LOGIN = 'login',
}

export const routeAuthConfig: Record<AuthRoutes, AppRouteProps> = {
	[AuthRoutes.LOGIN]: {
		path: getRouteLogin(),
		element: <LoginPageAsync />,
		authOnly: true,
	},
};
