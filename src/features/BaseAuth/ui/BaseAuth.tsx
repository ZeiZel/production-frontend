import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList, useAppDispatch, useAppSelector } from '@/shared/lib';
import { Input } from '@/shared/ui';
import { getPassword, getLogin } from '../model/selectors';
import { baseAuthReducer, baseAuthActions } from '../model/slice/baseAuth.slice';

const initialReducers: ReducerList = {
	baseAuth: baseAuthReducer,
};

export const BaseAuth = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const login = useAppSelector(getLogin);
	const password = useAppSelector(getPassword);

	const loginOnChange = useCallback(
		(value: string) => dispatch(baseAuthActions.setUsername(value)),
		[dispatch],
	);
	const passwordOnChange = useCallback(
		(value: string) => dispatch(baseAuthActions.setPassword(value)),
		[dispatch],
	);

	return (
		<DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
			<div>{t('Auth')}</div>
			<Input placeholder={'Логин'} onChange={loginOnChange} value={login} />
			<Input placeholder={'Пароль'} onChange={passwordOnChange} value={password} />
		</DynamicModuleLoader>
	);
};
