import React from 'react';
/* pages */
import { AboutPageAsync } from '@/pages/AboutPage';
import { ForbiddenPageAsync } from '@/pages/ForbiddenPage';
import { LoginPageAsync } from '@/pages/LoginPage';
import { MainPageAsync } from '@/pages/MainPage';
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
import { AppRoutes } from '../model/const';
import { AppRouteProps } from '../model/types';

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
