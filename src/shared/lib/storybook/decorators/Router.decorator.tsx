import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const withRouterDecorator = (StoryComponent: StoryFn) => {
	console.log('DECORATOR');

	return (
		<BrowserRouter>
			<StoryComponent />
		</BrowserRouter>
	);
};
