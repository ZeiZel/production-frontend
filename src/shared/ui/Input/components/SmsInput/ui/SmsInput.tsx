import React, { ForwardedRef, forwardRef } from 'react';
import { IInputProps, TInputValue } from '../../../model/types';
import { BaseInput } from '../../BaseInput';

export const SmsInput = forwardRef<HTMLInputElement, IInputProps>(
	({ value, ...props }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
		const formatValue = (inputValue: TInputValue): string =>
			inputValue ? inputValue.toString().replace(/\D/g, '').slice(0, 4) : '';

		return <BaseInput value={formatValue(value)} {...props} ref={ref} />;
	},
);
