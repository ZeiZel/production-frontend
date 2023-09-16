import React, { FC } from 'react';
import cn from 'clsx';
import styles from './ThemeSwitcher.module.scss';
import { IThemeSwitcherProps } from './ThemeSwitcher.props';
import { useTheme } from '@/app/model/providers/ThemeProvider';
import { Button, ThemeButton } from '@/shared/ui';
import { Theme } from '@/app/model/providers/ThemeProvider/lib/ThemeContext';
import { DarkIcon, LightIcon } from '@/shared/assets';

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }: IThemeSwitcherProps) => {
	const { toggleTheme, theme } = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={cn(styles.button, className)}
			onClick={toggleTheme}
		>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
		</Button>
	);
};