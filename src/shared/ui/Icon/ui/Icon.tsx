import React from 'react';
import { Theme } from '@/shared/const';
import { useTheme } from '@/shared/lib';
import { ICONS } from '../model/const/icons.const';
import { IIconProps } from './Icon.props';

/**
 * Компонент иконки в приложении
 * */
export const Icon = ({
	name,
	alt = 'Иконка',
	width = 20,
	height = 30,
	equal,
	...props
}: IIconProps) => {
	const { theme } = useTheme();

	const icon =
		theme === Theme.LIGHT
			? ICONS[name].icon
			: ICONS[name]?.icon_dark
				? ICONS[name].icon_dark
				: ICONS[name].icon;

	return (
		<img
			src={icon as string}
			width={equal || width}
			height={equal || height}
			style={{ minHeight: `${equal || height}px`, minWidth: `${equal || width}px` }}
			alt={ICONS[name].description ?? alt}
			{...props}
		/>
	);
};
