import React from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { Button, EIcons, Icon, EButtonType } from '@/shared/ui';

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button appearance={EButtonType.CLEAR} onClick={toggleTheme}>
			{theme === Theme.DARK ? (
				<Icon name={EIcons.DarkTheme} />
			) : (
				<Icon name={EIcons.LightTheme} />
			)}
		</Button>
	);
};
