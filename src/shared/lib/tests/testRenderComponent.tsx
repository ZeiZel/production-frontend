import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';
import i18n from '../../config/i18n/i18n.tests';
import { IDivAttributes } from '../types/baseProps.type';
import { StateSchema } from '../types/state.schema';

/** необязательные опции, которые нужны для запуска провайдеров тестов */
export interface IRenderOptions {
	route: string;
	initialState: DeepPartial<StateSchema>;
	asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>;
	theme: Theme;
}

export interface ITestRenderProviderProps extends IDivAttributes, DeepPartial<IRenderOptions> {}

/** провайдер для рендера компонентов из тестов */
export const TestRenderProvider = ({
	children,
	route = '/',
	theme = Theme.LIGHT,
	asyncReducers,
	initialState,
}: ITestRenderProviderProps) => {
	return (
		<MemoryRouter initialEntries={[route]}>
			<StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
				<I18nextProvider i18n={i18n}>
					<ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
				</I18nextProvider>
			</StoreProvider>
		</MemoryRouter>
	);
};

/** функция рендера компонентов тестов */
export function testComponent(component: ReactNode, options?: IRenderOptions) {
	return render(<TestRenderProvider {...options}>{component}</TestRenderProvider>);
}
