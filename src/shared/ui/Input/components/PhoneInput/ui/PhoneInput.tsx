import React, { memo, useCallback, KeyboardEvent, forwardRef, ForwardedRef } from 'react';
import { PhoneHelper } from '@/shared/lib';
import { IInputProps } from '../../../model/types';
import { BaseInput } from '../../BaseInput';

/** поле ввода номера телефона */
export const PhoneInput = memo(
	forwardRef<HTMLInputElement, IInputProps>(
		(
			{ value, onChange, ...props }: IInputProps,
			ref: ForwardedRef<HTMLInputElement>,
		) => {
			const formatValue = useCallback((value: string | undefined) => {
				if (value) {
					const formattedValue = value.replace(/\D/g, ''); // Удалить все, кроме цифр

					if (!formattedValue) {
						return formattedValue;
					}

					let formattedNumber = formattedValue;

					if (formattedNumber.charAt(0) !== '7') {
						formattedNumber = '7' + formattedNumber;
					}

					const code = `+${formattedNumber.slice(0, 1)}`;
					const region =
						formattedNumber.slice(1, 4).length < 3
							? ` (${formattedNumber.slice(1, 4)}`
							: ` (${formattedNumber.slice(1, 4)}) `;
					const city = formattedNumber.slice(4, 7);
					const firstCode = formattedNumber.slice(7, 9)
						? `-${formattedNumber.slice(7, 9)}`
						: '';
					const secondCode = formattedNumber.slice(9, 11)
						? `-${formattedNumber.slice(9, 11)}`
						: '';

					formattedNumber = code + region + city + firstCode + secondCode;
					return formattedNumber;
				}

				return '';
			}, []);

			const handleKeyDown = useCallback(
				(event: KeyboardEvent<HTMLInputElement>) => {
					if (event.key === 'Backspace' && value) {
						event.preventDefault();
						const phoneValueClear = PhoneHelper.getClearPhone(value);
						const phoneValueDeleted = phoneValueClear.substring(
							0,
							phoneValueClear.length - 1,
						);

						onChange?.(formatValue(phoneValueDeleted));
					}
				},
				[formatValue, onChange, value],
			);

			const handleChange = useCallback(
				(phoneValue: string) => {
					onChange?.(formatValue(phoneValue));
				},
				[onChange, formatValue],
			);

			return (
				<BaseInput
					{...props}
					placeholder={'+7 (___) ___-__-__'}
					ref={ref}
					type={'text'}
					value={value}
					onKeyDown={handleKeyDown}
					onChange={handleChange}
				/>
			);
		},
	),
);
