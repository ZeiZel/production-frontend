import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

export interface ITextareaProps
	extends Omit<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'onChange'> {
	onChange?: (value: string) => void;
	error?: string;
}
