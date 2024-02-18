/* 1 - импортируется изображение */
import {
	/* theme */
	LightThemeIcon,
	DarkThemeIcon,
} from '@/shared/assets';
import { EIcons } from '../types/icons.type';

/* 3 - инициализируем изображение - дальше только передать пропсом name из EIcons в компонент */
export const ICONS: Record<EIcons, { icon: unknown; icon_dark?: unknown; description: string }> = {
	/* theme */
	[EIcons.Theme]: {
		icon: LightThemeIcon,
		icon_dark: DarkThemeIcon,
		description: 'Сменить тему',
	},
};
