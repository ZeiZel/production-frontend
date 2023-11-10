import React from 'react';
import cn from 'clsx';
import styles from './ThemeSwitcher.module.scss';
import { IThemeSwitcherProps } from './ThemeSwitcher.props';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { Button, ThemeButton } from '@/shared/ui';

import DarkIcon from '@/shared/assets/theme/night.svg';
import LightIcon from '@/shared/assets/theme/sun.svg';

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={cn(styles.ThemeSwitcher, className)}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ?
				<span className={styles.size}><DarkIcon/></span> :
				<span className={styles.size}><LightIcon/></span>
			}
		</Button>
	);
};

