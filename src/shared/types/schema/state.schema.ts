import {
	AnyAction,
	CombinedState,
	Reducer,
	ReducersMapObject,
	EnhancedStore,
	Action,
	MiddlewareArray,
	ThunkMiddleware,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { BaseAuthSchema } from '@/features/BaseAuth';
import { UserSchema } from '@/entities/User';
import { rtkApi } from '@/shared/api';

export interface StateSchema {
	/** базовые редьюсеры */
	user: UserSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

	/** асинхронные редьюсеры */
	baseAuth?: BaseAuthSchema;
}

/** все ключи схемы стейта */
export type StateSchemaKey = keyof StateSchema;
/** список вмонтированных редьюсеров */
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export type ToolkitStoreType = ToolkitStore<
	StateSchema,
	Action<unknown>,
	MiddlewareArray<[ThunkMiddleware<StateSchema, AnyAction, ThunkExtraArg>]>
	/** костыль для добавления менеджера редьюсеров */
> & { reducerManager?: object };

/** возвращаемые значения из менеджера редьюсеров */
export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
	getMountedReducers: () => MountedReducers;
}

/** дополнительные аргументы для thunk под наш кастомный фетч */
export interface ThunkExtraArg {
	api: object;
}

/** тип стора редакса с менеджером редьюсеров */
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

/** тип конфига для асинхронного thunk */
export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
