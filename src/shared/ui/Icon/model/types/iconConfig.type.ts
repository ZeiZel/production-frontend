import { SVGProps, VFC } from 'react';
import { DarkThemeIcon, LightThemeIcon, UserDefaultIcon } from '@/shared/assets';
import { EIcons } from './icons.type';

export const ICONS: Record<EIcons, SVGImageElement | HTMLImageElement | string | SVGElement | VFC> =
	{
		/* ui */
		[EIcons.User]: UserDefaultIcon,
		/* theme */
		[EIcons.DarkTheme]: DarkThemeIcon,
		[EIcons.LightTheme]: LightThemeIcon,
	};
