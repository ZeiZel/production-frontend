import React, { ForwardedRef, forwardRef } from 'react';
import { TInputValue } from '../../../model/types';
import { BaseInput } from '../../BaseInput';
import { INumberInputProps } from './NumberInput.props';

/** поле ввода числа */
export const NumberInput = forwardRef<HTMLInputElement, INumberInputProps>(
	({ value, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
		const formatValue = (numberValue: TInputValue) => {
			if (typeof numberValue !== 'string') {
				return undefined;
			}

			// Удалить все символы, кроме цифр и точки
			const cleanValue = numberValue.replace(/\D/g, '');

			// Разбить число на целую и десятичную части
			const [integerPart, decimalPart] = cleanValue.split('.');

			// Форматировать целую часть с разделителями тысяч
			const formattedIntegerPart = Number(integerPart).toLocaleString();

			// Соединить целую и десятичную части с запятой
			return decimalPart ? `${formattedIntegerPart},${decimalPart}` : formattedIntegerPart;
		};

		return <BaseInput {...props} value={formatValue(value)} ref={ref} />;
	},
);
