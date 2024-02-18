import React, { ChangeEvent, ForwardedRef, forwardRef, ReactNode } from 'react';
import { cn } from '@/shared/lib';
import styles from './Textarea.module.scss';
import { ITextareaProps } from './Textarea.props';

/**
 * Компонент поля ввода текста
 * */
export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
	(
		{ error, onChange, className, ...props }: ITextareaProps,
		ref: ForwardedRef<HTMLTextAreaElement>,
	): ReactNode => {
		const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
			onChange?.(event.target.value);
		};

		return (
			<div className={cn(styles.textarea, className)}>
				<textarea
					{...props}
					ref={ref}
					className={cn(styles.textarea__input, {
						[styles.textarea__error]: !!error,
					})}
					onChange={handleOnChange}
				/>
				{error && (
					<span role='alert' className={styles.error}>
						{error}
					</span>
				)}
			</div>
		);
	},
);
