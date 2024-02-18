import React, { ForwardedRef, forwardRef } from 'react';
import { TInputValue } from '../../../model/types';
import { BaseInput } from '../../BaseInput';
import { ICardInputProps } from './CardInput.props';

/** поле ввода карты карты */
export const CardInput = forwardRef<HTMLInputElement, ICardInputProps>(
	({ value, ...props }: ICardInputProps, ref: ForwardedRef<HTMLInputElement>) => {
		const formatCardNumber = (cardValue: TInputValue) => {
			if (typeof cardValue === 'string') {
				const cleanedSpaces = cardValue.replace(/\s/g, '').replace(/\D/g, '').slice(0, 16);
				const parts = [];
				for (let i = 0; i < cleanedSpaces.length; i += 4) {
					parts.push(cleanedSpaces.slice(i, i + 4));
				}
				if (cleanedSpaces.length <= 16) {
					return parts.join(' ');
				}
			}

			return undefined;
		};

		return (
			<BaseInput
				type={'text'}
				value={formatCardNumber(value)}
				max={16}
				{...props}
				ref={ref}
			/>
		);
	},
);
