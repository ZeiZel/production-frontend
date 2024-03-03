import React, { ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '@/shared/const';
import { ThemeContext } from '@/shared/lib';

// тут мы получаем саму тему из локального хранилища, и если её нет, то устанавливается светлая по умолчанию
const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export interface ThemeProviderProps {
	children: ReactNode;
	initialTheme: Theme;
}

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

	// мемоизируем объект, чтобы каждый раз при перерендере он не соаздавался заново
	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme: setTheme,
		}),
		[theme],
	);

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
