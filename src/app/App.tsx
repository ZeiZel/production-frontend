import React from 'react';
import cn from 'clsx';
import { useTheme } from './model/providers/ThemeProvider';
import { AppRouter } from './model/providers/RouterProvider';
import { Navbar } from '@/widgets';

export const App = () => {
	const { theme } = useTheme();

	return (
		<div
			className={cn('app', [theme])}
		>
			<Navbar className={'navbar'} />
			<AppRouter />
		</div>
	);
};