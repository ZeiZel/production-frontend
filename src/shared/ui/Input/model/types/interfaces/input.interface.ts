import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { TInputTransform } from '../types/inputTransform.type';

export interface IInputProps
	extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange' | 'value'> {
	value?: string;
	/** сообщение об ошибке */
	errorMessage?: string;
	/** наименование поля */
	caption?: string;
	/** лейбл поля */
	label?: string;
	/** растягивание на весь экран */
	stretch?: boolean;
	/** информация, которая должна вывестись под инпутом */
	info?: string;
	/** суффикс для поля */
	suffix?: string;
	/** необходимые трансформации инпута */
	transform?: TInputTransform;
	/** замьюченый текст инпута */
	muted?: boolean;
	/** проверяем, требуется ли автофокус инпуту */
	autofocus?: boolean;
	//
	onChange?: (value: string) => void;
}
