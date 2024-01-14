import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '@/shared/types';
import { createReduxStore } from '../config/store';

interface IStoreProviderProps {
	children: ReactNode;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<IStoreProviderProps> = ({
	children,
	initialState,
	asyncReducers,
}: IStoreProviderProps) => {
	const store = createReduxStore(
		initialState as StateSchema,
		asyncReducers as ReducersMapObject<StateSchema>,
	);

	return <Provider store={store}>{children}</Provider>;
};
