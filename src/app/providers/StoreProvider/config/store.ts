import {
	Action,
	AnyAction,
	configureStore,
	MiddlewareArray,
	ReducersMapObject,
	ThunkMiddleware,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
// import { Reducer, CombinedState } from 'redux';
import { userReducers } from '@/entities/User';
import { rtkApi } from '@/shared/api';
import { StateSchema, ThunkExtraArg } from '@/shared/lib';

/**
 * Функция сборки редакс-стейта
 * */
export const createReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
) => {
	const reducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		user: userReducers,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	const extraArgument: ThunkExtraArg = { api: {} };

	const store: ToolkitStore<
		StateSchema,
		Action<unknown>,
		MiddlewareArray<[ThunkMiddleware<StateSchema, AnyAction, ThunkExtraArg>]>
	> = configureStore({
		reducer: reducers, // as Reducer<CombinedState<StateSchema>>,
		preloadedState: initialState,
		devTools: __IS_DEV__ ? { shouldHotReload: true } : false,
		middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware<StateSchema>) =>
			getDefaultMiddleware({ thunk: { extraArgument } }),
	});

	return store;
};

export type TRootState = ReturnType<typeof createReduxStore>['getState'];
export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
