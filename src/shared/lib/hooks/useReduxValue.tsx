import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TAppDispatch, TRootState } from '@/app/providers/StoreProvider';

/** хук диспетча */
export const useAppDispatch = () => useDispatch<TAppDispatch>();

/** хук селектора */
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

/** получение значения из рекдакса */
export const useReduxValue = () => {};
