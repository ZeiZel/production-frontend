import React from 'react';
import { AboutPageAsync } from '@/pages/AboutPage';
import { ForbiddenPageAsync } from '@/pages/ForbiddenPage';
import { MainPageAsync } from '@/pages/MainPage';
import { NotFoundPageAsync } from '@/pages/NotFoundPage';
import { getRouteMain, getRouteAbout, getRouteForbidden, getRouteNotFound } from '@/shared/const';
import { AppRoutes } from '../model/const';
import { AppRouteProps } from '../model/types';
import { routeAuthConfig } from './auth.router';

/* тут мы храним все роуты приложения */
export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	...routeAuthConfig,
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
