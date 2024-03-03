import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';
import { Layout } from '@/widgets/Layout';
import { Loader } from '@/shared/ui';
import { routeConfig } from '../config/route.config';

export const AppRouter = () => (
	<Routes>
		{Object.values(routeConfig).map(({ element, path }) => (
			<Route
				key={path}
				path={path}
				element={
					<RequireAuth>
						<Suspense fallback={<Loader />}>
							<Layout>{element}</Layout>
						</Suspense>
					</RequireAuth>
				}
			/>
		))}
	</Routes>
);
