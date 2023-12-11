import { IInputAttributes } from '@/shared/types';

export interface InputProps extends Omit<IInputAttributes, 'onChange' | 'value'> {
	autofocus?: boolean;
	value?: string;
	onChange?: (value: string) => void;
}
