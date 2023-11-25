import { Context, createContext } from 'react';

// перечисление возможных вариантов темы
export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

export interface IThemeContextProps {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
}

// глобальный контекст
export const ThemeContext: Context<IThemeContextProps> = createContext<IThemeContextProps>({});

// ключ, по которому будем доставать тему из локального хранилища
export const LOCAL_STORAGE_THEME_KEY = 'theme';
