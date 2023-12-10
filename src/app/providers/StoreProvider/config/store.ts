import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { CombinedState, Reducer } from 'redux';
import { createReducerManager } from '@/app/providers/StoreProvider/config/reducerManager';
import { userReducers } from '@/entities/User';
import { rtkApi } from '@/shared/api';
import { StateSchema, ThunkExtraArg, ToolkitStoreType } from '@/shared/types';

/**
 * Функция сборки редакс-стейта
 * @param {StateSchema} initialState - начальный стейт, который мы получаем извне (для тестов)
 * @param {ReducersMapObject<StateSchema>} asyncReducers - асинхронные редьюсеры (для тестов)
 * @returns store - стор редакса
 * */
export const createReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
): ToolkitStoreType => {
	/** импортируем все редьюсеры приложения сюда */
	const reducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		/**
		 * тут нужно оставлять только обязательные редьюсеры,
		 * которые нужны для начальной загрузки приложения
		 * */
		user: userReducers,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	/** тут декларируем дополнительные аргументы в thunk, которые понядобятся для API */
	const extraArgument: ThunkExtraArg = { api: {} };

	/** инстанциируем менеджер редьюсеров */
	const reducerManager = createReducerManager(reducers);

	const store: ToolkitStoreType = configureStore({
		/** берём из менеджера редьюсеры */
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		preloadedState: initialState,
		devTools: __IS_DEV__ ? { shouldHotReload: true } : false,
		middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware<StateSchema>) =>
			getDefaultMiddleware({ thunk: { extraArgument } }),
	});

	/** добавляем в стейт сам менеджер редьюсеров */
	store.reducerManager = reducerManager;

	return store;
};

export type TRootState = ReturnType<typeof createReduxStore>['getState'];
export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
