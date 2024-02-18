import { EFormatTemplate } from '@/shared/constants';
import { IInputProps } from '../../../model/types';

export interface IDatePickerProps extends IInputProps {
	label?: string;
	dateFormat: EFormatTemplate;
	stretch?: boolean;
	disableFeature?: boolean;
	selectedDate?: string;
}
