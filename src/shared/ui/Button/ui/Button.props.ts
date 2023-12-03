import { IButtonAttributes } from '@/shared/lib';
import { EButtonType } from '../model';

export interface IButtonProps extends IButtonAttributes {
	/** Тема кнопки */
	appearance?: EButtonType;
	/** Размер кнопки */
	size?: 's' | 'm' | 'l';
}
