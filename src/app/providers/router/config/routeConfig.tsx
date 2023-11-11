import React from 'react';
import { AppRouteProps } from '../model/types';
import { AppRoutes } from '../model/const';
/* pages */
import { MainPageAsync } from '@/pages/MainPage';
import { AboutPageAsync } from '@/pages/AboutPage';
import { LoginPageAsync } from '@/pages/LoginPage';
import { ForbiddenPageAsync } from '@/pages/ForbiddenPage';
import { NotFoundPageAsync } from '@/pages/NotFoundPage';
/* route const */
import {
	/* data */
	getRouteMain,
	getRouteAbout,
	/* auth */
	getRouteLogin,
	/* service */
	getRouteForbidden,
	getRouteNotFound,
} from '@/shared/const';

/* тут мы храним все роуты приложения */
export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPageAsync />,
		authOnly: true,
	},
	[AppRoutes.ABOUT]: {
		path: getRouteAbout(),
		element: <AboutPageAsync />,
		authOnly: true,
	},
	[AppRoutes.LOGIN]: {
		path: getRouteLogin(),
		element: <LoginPageAsync />,
		authOnly: true,
	},
	[AppRoutes.FORBIDDEN]: {
		path: getRouteForbidden(),
		element: <ForbiddenPageAsync />,
		authOnly: true,
	},
	[AppRoutes.NOT_FOUND]: {
		path: getRouteNotFound(),
		element: <NotFoundPageAsync />,
		authOnly: true,
	},
};
