import React, { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from 'redux';
import { useAppDispatch } from '@/shared/lib';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/shared/types';

export type ReducerList = {
	[name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface IDynamicModuleLoaderProps {
	children: ReactNode;
	/** список редьюсеров, которые нужно замаунтить */
	reducers: ReducerList;
	/** убрать после размонтирования */
	removeAfterUnmount?: boolean;
}

/** ХОК, который подгружает асинхронные редьюсеры в стейт компонента */
export const DynamicModuleLoader = ({
	children,
	reducers,
	removeAfterUnmount = true,
}: IDynamicModuleLoaderProps) => {
	const dispatch = useAppDispatch();
	/** получаем стор */
	const store = useStore() as ReduxStoreWithManager;

	useEffect(() => {
		/** получаем список вмонтированных редьюсеров */
		const mountedReducers = store.reducerManager.getMountedReducers();

		/** проходимся по всем редьюсерам и добавляем их в стор */
		Object.entries(reducers).forEach(([name, reducer]) => {
			const mounted = mountedReducers[name as StateSchemaKey];

			/** если данный редьюсер не вмонитрован */
			if (!mounted) {
				/** то монтируем данный редьюсер */
				store.reducerManager.add(name as StateSchemaKey, reducer);
				/** добавляем лог в консоли редакса */
				dispatch({ type: `@MOUNT ${name} reducer` });
			}
		});

		return () => {
			if (removeAfterUnmount) {
				/** удаляем нужный редьюсер при анмаунте компонента */
				Object.entries(reducers).forEach(([name, reducer]) => {
					store.reducerManager.remove(name as StateSchemaKey);
					dispatch({ type: `@UNMOUNT ${name} reducer` });
				});
			}
		};
		/** сюда не нужно добавлять зависимости! */
		/* eslint-disable-next-line */
	}, []);

	return <>{children}</>;
};
