import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/app/providers/router/config/routeConfig';
import { Loader } from '@/shared/ui';

export const AppRouter = () => {
	return (
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
};
