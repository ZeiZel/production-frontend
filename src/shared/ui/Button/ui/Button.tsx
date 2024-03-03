import React, { forwardRef, ForwardedRef, memo } from 'react';
import { StringHelper, cn } from '@/shared/lib';
import { EButtonType } from '../model';
import styles from './Button.module.scss';
import { IButtonProps } from './Button.props';

/**
 * Основная кнопка приложения
 * */
export const Button = memo(
	forwardRef<HTMLButtonElement, IButtonProps>(
		(
			{
				appearance = EButtonType.PRIMARY,
				stretch = false,
				rounded = 'm',
				outlined = false,
				shadow = 'none',
				formatText = 'none',
				size = 'm',
				circle = false,
				image,
				type = 'button',
				children,
				className,
				...props
			}: IButtonProps,
			ref: ForwardedRef<HTMLButtonElement>,
		) => {
			return (
				<button
					{...props}
					type={type}
					data-testid={'button'}
					ref={ref}
					className={cn(
						styles.button,
						className,
						styles[appearance],
						styles[`size__${size}`],
						styles[`rounded__${rounded}`],
						styles[`shadow__${shadow}`],
						{
							[styles.stretch]: stretch,
							[styles.outlined]: outlined,
							[styles.circle]: circle,
						},
					)}
				>
					{StringHelper.formatCase(children, formatText)}
				</button>
			);
		},
	),
);
