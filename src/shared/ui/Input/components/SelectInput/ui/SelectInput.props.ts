import { ReactNode } from 'react';
import { IInputProps } from '@/shared/ui/Input/model/types';

export interface ISelectInputProps extends IInputProps {
	children: ReactNode;
	/** массив списка нужных значений */
	values: {
		title: string;
		value: string;
		image?: string;
	}[];
}
