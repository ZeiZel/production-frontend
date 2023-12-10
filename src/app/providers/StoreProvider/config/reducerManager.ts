import { AnyAction, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import {
	MountedReducers,
	ReducerManager,
	StateSchema,
	StateSchemaKey,
} from '@/shared/types/state.schema';

/**
 * данный менеджер находится в документации Code Splitting Redux
 * @param {ReducersMapObject<StateSchema>} initialReducers - начальные редьюсеры в приложении
 * @returns {ReducerManager} manager - функциональность для менеджера редьюсеров
 * */
export function createReducerManager(
	initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
	/** собираем новый объект из редьюсеров */
	const reducers = { ...initialReducers };

	/** комбинированный стейт из переданных редьюсеров */
	let combinedReducer = combineReducers(reducers);

	/** список редьюсеров для удаления из стейта */
	let keysToRemove: StateSchemaKey[] = [];
	/** список вмонтированных редьюсеров */
	const mountedReducers: MountedReducers = {};

	return {
		/** получение списка всех редьюсеров */
		getReducerMap: () => reducers,
		/**
		 * Получаем список вмонтированных редьюсеров
		 * true - вмонтирован, false - демонтирован
		 * */
		getMountedReducers: () => mountedReducers,
		/** возвращает стейт */
		reduce: (state: StateSchema, action: AnyAction) => {
			/** если в массиве есть список редьюсеров на удаление, то вырезаем их */
			if (keysToRemove.length > 0) {
				state = { ...state };
				keysToRemove.forEach((key) => {
					delete state[key];
				});
				keysToRemove = [];
			}
			/** возвращаем скобинированный редьюсер */
			return combinedReducer(state, action);
		},
		/** добавление редьюсера */
		add: (key: StateSchemaKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return;
			}
			reducers[key] = reducer;
			mountedReducers[key] = true;

			combinedReducer = combineReducers(reducers);
		},
		/** удаление редьюсера */
		remove: (key: StateSchemaKey) => {
			if (!key || !reducers[key]) {
				return;
			}
			delete reducers[key];
			keysToRemove.push(key);
			mountedReducers[key] = false;

			combinedReducer = combineReducers(reducers);
		},
	};
}
