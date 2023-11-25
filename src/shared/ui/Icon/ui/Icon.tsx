import React from 'react';
import { ICONS } from '../model';
import { IIconProps } from './Icon.props';

export const Icon = ({ name, alt, width, height, ...props }: IIconProps) => {
	return (
		<img
			src={ICONS[name] as string}
			alt={alt ?? 'icon'}
			width={width ?? 30}
			height={height ?? 30}
			{...props}
		/>
	);
};
