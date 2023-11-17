import React, { FC } from 'react';
import cn from 'clsx';
import styles from './Button.module.scss';
import { IButtonProps, ThemeButton } from './Button.props';

export const Button: FC<IButtonProps> = ({
	className,
	children,
	theme = ThemeButton.PRIMARY,
	...props
}: IButtonProps) => {
	return (
		<button className={cn(styles.button, className, styles[theme])} {...props}>
			{children}
		</button>
	);
};
