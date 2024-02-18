import React from 'react';
import { cn } from '@/shared/lib';
import styles from './InputField.module.scss';
import { IInputFieldProps } from './InputField.props';

/** компонент для имитации поля ввода */
export const InputField = ({ children, className, ...props }: IInputFieldProps) => (
	<div className={cn(className, styles.input)} {...props}>
		{children}
	</div>
);
