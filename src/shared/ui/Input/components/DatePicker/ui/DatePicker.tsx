import React, { ForwardedRef, forwardRef, useState } from 'react';
import { EFormatTemplate } from '@/shared/const';
import { DateHelper, cn } from '@/shared/lib';
import { BaseInput } from '../../BaseInput';
import styles from './DatePicker.module.scss';
import { IDatePickerProps } from './DatePicker.props';

/** поле ввода даты */
export const DatePicker = forwardRef<HTMLInputElement, IDatePickerProps>(
	(
		{
			label = 'Дата',
			selectedDate = DateHelper.formatDate(new Date(), EFormatTemplate.DATE),
			className,
			...props
		}: IDatePickerProps,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		const [date, setDate] = useState<string>(selectedDate);
		const [isFocused, setIsFocused] = useState<boolean>(false);

		const handleFocus = () => {
			setIsFocused(true);
		};

		const handleBlur = () => {
			if (!date) {
				setIsFocused(false);
			}
		};

		const handleInputChange = (value: string) => {
			setDate(value);
		};

		return (
			<div className={styles.datepicker}>
				<label
					className={cn(styles.datepicker__label, {
						[styles.active]: isFocused || date,
					})}
					htmlFor={'datepicker'}
				>
					{label}
					<BaseInput
						{...props}
						className={cn(className, styles.datepicker__input, {
							[styles.active]: isFocused || date,
						})}
						min={`${new Date('1900-01-01')}`}
						id={'datepicker'}
						caption={'Дата'}
						type='date'
						value={date}
						onChange={handleInputChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						ref={ref}
					/>
				</label>
			</div>
		);
	},
);
