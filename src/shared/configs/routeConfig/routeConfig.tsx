import { RouteProps } from 'react-router-dom';
import { MainPageAsync } from '@/pages/Main';
import { AboutPageAsync } from '@/pages/About';

// ключи путей
export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
}

// роуты по ключам
export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
};

// тут содержится информация о пропсах, которые будут попадать в роутер
export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPageAsync />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPageAsync />,
	},
};