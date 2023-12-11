import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { baseAuthReducer } from '@/features/BaseAuth';
import { StateSchema } from '@/shared/types';

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
	baseAuth: baseAuthReducer,
};

export const StoreDecorator =
	(
		state: DeepPartial<StateSchema>,
		asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
	) =>
	(StoryComponent: StoryFn) => (
		<StoreProvider
			initialState={state}
			asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}
		>
			<StoryComponent />
		</StoreProvider>
	);
