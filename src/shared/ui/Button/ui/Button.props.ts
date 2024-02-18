import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { TStringCaseFormat } from '@/shared/lib';
import { EIcons } from '@/shared/ui';
import { EButtonType, TButtonArrowSide, TButtonRounded, TButtonSize } from '../model';

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	/** определяет тип кнопки */
	appearance?: EButtonType;
	/** растягивает кнопку на всю ширину */
	stretch?: boolean;
	/** определяет скругление кнопки */
	rounded?: TButtonRounded;
	/** добавляет стрелку для кнопки */
	arrow?: TButtonArrowSide;
	/** добавляет внешнюю линию для кнопки */
	outlined?: boolean;
	/** определяет форматирование текста */
	formatText?: TStringCaseFormat;
	/** определяет размер отступов кнопки */
	size?: TButtonSize;
	/** делает кнопку круглой */
	circle?: boolean;
	/** добавляет изображение в кнопку */
	image?: EIcons;
	/** свечение / тень кнопки */
	shadow?: 'primary' | 'base' | 'none';
}
