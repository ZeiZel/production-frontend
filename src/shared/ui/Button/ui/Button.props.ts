import { ButtonProps } from '@/shared/lib';
import { EButtonType } from '../model';

export interface IButtonProps extends ButtonProps {
	/** Тема кнопки */
	appearance?: EButtonType;
	/** Размер кнопки */
	size?: 's' | 'm' | 'l';
}
