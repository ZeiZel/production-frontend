import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/app/providers/router/config/routeConfig';

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(({ path, element }) => (
					<Route
						key={path}
						path={path}
						element={
							<Suspense fallback={<div>Loading...</div>}>
								<div className={'page-wrapper'}>{element}</div>
							</Suspense>
						}
					/>
				))}
			</Routes>
		</Suspense>
	);
};
