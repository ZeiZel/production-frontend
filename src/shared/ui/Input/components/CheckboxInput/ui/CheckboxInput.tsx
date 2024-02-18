import React, { ChangeEvent, ForwardedRef, forwardRef, useId } from 'react';
import { cn } from '@/shared/lib';
import { EIcons, Icon } from '../../../../Icon';
import styles from './CheckboxInput.module.scss';
import { ITogglerProps } from './CheckboxInput.props';

/** Чекбокс */
export const CheckboxInput = forwardRef<HTMLInputElement, ITogglerProps>(
	(
		{ label, checkboxType, onChange, type = 'checkbox', ...props }: ITogglerProps,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		const id = useId();

		const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
			onChange?.(event.target.value);
		};

		switch (checkboxType) {
			case 'button':
				return (
					<div className={styles.button}>
						<label htmlFor={id} className={styles.button__wrapper}>
							<input
								{...props}
								ref={ref}
								id={id}
								type={type}
								className={styles.button__input}
								onChange={handleOnChange}
							/>
							<span className={styles.button__tile}>
								<span className={styles.button__label}>{label}</span>
							</span>
						</label>
					</div>
				);
			case 'slider':
				return (
					<div className={styles.toggler}>
						<span>
							<input
								{...props}
								ref={ref}
								id={id}
								className={cn(styles.toggler__input, styles.toggler__ios)}
								type={type}
								onChange={handleOnChange}
							/>
							<label className={styles.toggler__button} htmlFor={id} />
						</span>
						<label htmlFor='cb2-7'>{label}</label>
					</div>
				);
			case 'checkbox':
			default:
				return (
					<div className={styles.checkbox}>
						<input
							{...props}
							ref={ref}
							id={id}
							className={styles.checkbox__input}
							type={type}
							onChange={handleOnChange}
						/>
						<label className={styles.checkbox__label} htmlFor={id}>
							<span className={styles.checkbox__check}>
								<Icon
									name={EIcons.CheckMark}
									className={styles.checkbox__image}
									width={12}
									height={10}
								/>
							</span>
							<span className={styles.checkbox__text}>{label}</span>
						</label>
					</div>
				);
		}
	},
);
