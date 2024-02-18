import { Context, createContext } from 'react';
import { Theme } from '@/shared/const';

export interface IThemeContextProps {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
}

export const ThemeContext: Context<IThemeContextProps> = createContext<IThemeContextProps>({});
