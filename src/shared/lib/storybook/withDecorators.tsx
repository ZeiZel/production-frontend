import { StoryFn } from '@storybook/react';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers';
import { Theme } from '@/shared/const';

export const withDecorators = (StoryComponent: StoryFn) => (
	<BrowserRouter>
		<Suspense>
			<ThemeProvider>
				<div className={`app ${Theme.LIGHT}`}>
					<StoryComponent />
				</div>
			</ThemeProvider>
		</Suspense>
	</BrowserRouter>
);
