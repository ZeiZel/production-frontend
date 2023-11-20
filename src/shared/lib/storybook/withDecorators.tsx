import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

export const withDecorators =
	(theme: Theme = Theme.LIGHT) =>
	(StoryComponent: StoryFn) => (
		<BrowserRouter>
			<Suspense>
				<ThemeProvider>
					<div className={`app ${theme}`}>
						<StoryComponent />
					</div>
				</ThemeProvider>
			</Suspense>
		</BrowserRouter>
	);
