import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const withRouterDecorator = (StoryComponent: StoryFn) => (
	<BrowserRouter>
		<StoryComponent />
	</BrowserRouter>
);
