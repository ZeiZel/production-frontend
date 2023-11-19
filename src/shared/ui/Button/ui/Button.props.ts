import { EButtonType } from '../model';
import { ButtonProps } from '@/shared/lib';

export interface IButtonProps extends ButtonProps {
	/** Тема кнопки */
	appearance?: EButtonType;
	/** Размер кнопки */
	size: 's' | 'm' | 'l';
}
