import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';

export const withSuspenseDecorator = (StoryComponent: StoryFn) => (
	<Suspense>
		<StoryComponent />
	</Suspense>
);
