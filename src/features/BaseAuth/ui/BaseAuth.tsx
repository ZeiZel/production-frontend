import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from 'react-redux';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib';
import { ReduxStoreWithManager } from '@/shared/types';
import { baseAuthReducer } from '../model/slice/baseAuth.slice';

const initialReducers: ReducerList = {
	baseAuth: baseAuthReducer,
};

export const BaseAuth = () => {
	const { t } = useTranslation();
	const store = useStore() as ReduxStoreWithManager;

	return (
		<DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
			<div>{t('Auth')}</div>
		</DynamicModuleLoader>
	);
};
