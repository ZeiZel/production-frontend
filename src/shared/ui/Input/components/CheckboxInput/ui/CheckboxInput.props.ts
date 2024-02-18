import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface ITogglerProps
	extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> {
	/** поясняющий текст */
	label: string;
	/** тип чекбокса */
	checkboxType: 'checkbox' | 'slider' | 'button';
	onChange?: (value: string) => void;
}
