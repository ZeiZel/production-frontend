import React, { FC } from 'react';
import cn from 'clsx';
import styles from './Button.module.scss';
import { IButtonProps } from './Button.props';
import { EButtonType } from '../model';

/** Основная кнопка приложения */
export const Button: FC<IButtonProps> = ({
	className,
	children,
	appearance = EButtonType.PRIMARY,
	size = 'm',
	...props
}: IButtonProps) => {
	return (
		<button
			className={cn(
				styles.button,
				className,
				styles[`appearance__${appearance}`],
				styles[`size__${size}`],
			)}
			{...props}
		>
			{children}
		</button>
	);
};
