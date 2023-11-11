import React from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { Button, ThemeButton } from '@/shared/ui';

import DarkIcon from '@/shared/assets/theme/night.svg';
import LightIcon from '@/shared/assets/theme/sun.svg';

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};
