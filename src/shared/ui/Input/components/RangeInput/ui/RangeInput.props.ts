import { CurrSymbol } from '@/shared/types';
import { IInputProps } from '../../../model/types';

export interface IRangeProps extends IInputProps {
	range: {
		max: number;
		min: number;
	};
	stretch?: boolean;
	prefix?: CurrSymbol;
}
