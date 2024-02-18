import React from 'react';
import { useTheme } from '@/shared/lib';
import { Button, EIcons, Icon, EButtonType } from '@/shared/ui';

export const ThemeSwitcher = () => {
	const { toggleTheme } = useTheme();

	return (
		<Button appearance={EButtonType.CLEAR} onClick={toggleTheme}>
			<Icon name={EIcons.Theme} />
		</Button>
	);
};
