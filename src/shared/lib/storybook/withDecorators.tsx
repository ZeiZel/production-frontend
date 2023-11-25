import { StoryFn } from '@storybook/react';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

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
