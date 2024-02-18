import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '@/shared/ui';
import { routeConfig } from '../config/route.config';

export const AppRouter = () => (
	<Routes>
		{Object.values(routeConfig).map(({ element, path }) => (
			<Route
				key={path}
				path={path}
				element={
					<Suspense fallback={<Loader />}>
						<div className='page-wrapper'>{element}</div>
					</Suspense>
				}
			/>
		))}
	</Routes>
);
