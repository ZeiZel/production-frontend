import React, {
	ChangeEvent,
	useId,
	useState,
	memo,
	forwardRef,
	ForwardedRef,
} from 'react';
import { cn } from '@/shared/lib';
import { IInputProps } from '../../../model/types';
import { TInputValue } from '../../../model/types/types/inputValue.type';
import styles from './BaseInput.module.scss';

/** базовое поле для обычного ввода данных */
export const BaseInput = memo(
	forwardRef<HTMLInputElement, IInputProps>(
		(
			{
				className,
				caption,
				transform = 'none',
				stretch = false,
				muted = false,
				autofocus = false,
				errorMessage,
				value,
				onChange,
				readOnly,
				children,
				...props
			}: IInputProps,
			ref: ForwardedRef<HTMLInputElement>,
		) => {
			const id = useId();
			const [isFocused, setIsFocused] = useState<boolean>(false);

			const handleTransform = (upperValue: TInputValue) => {
				if (typeof upperValue === 'string') {
					if (transform === 'uppercase') {
						return upperValue.toUpperCase();
					}

					if (transform === 'lowercase') {
						return upperValue.toLowerCase();
					}
				}

				return upperValue;
			};

			const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
				onChange?.(event.target.value);
			};

			return (
				<>
					<label
						htmlFor={id}
						className={cn(styles.input, className, {
							[styles.stretch]: stretch,
						})}
					>
						<input
							{...props}
							id={id}
							ref={ref}
							className={cn({
								[styles.error]: errorMessage,
								[styles.stretch]: stretch,
								[styles.muted]: muted,
								[styles.readOnly]: readOnly,
								[styles.focused]: isFocused,
							})}
							readOnly={readOnly}
							value={transform === 'none' ? value : handleTransform(value)}
							onChange={handleOnChange}
							required
						/>
						<label htmlFor={id} data-alt={caption} />
						{children}
					</label>
					{errorMessage && (
						<span role='alert' className={styles.errorMessage}>
							{errorMessage}
						</span>
					)}
				</>
			);
		},
	),
);
