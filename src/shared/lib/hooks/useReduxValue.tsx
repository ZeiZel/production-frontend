import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TAppDispatch } from '@/app/providers/StoreProvider';
import { StateSchema } from '@/shared/types';

/** хук диспетча */
export const useAppDispatch = () => useDispatch<TAppDispatch>();

/** хук селектора */
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;

/** получение значения из рекдакса */
export const useReduxValue = () => {};
