import cn from 'clsx';
import React, { createElement, FC, ReactNode } from 'react';
import styles from './HTag.module.scss';
import { HTagType, IHTagProps } from './HTag.props';

export const HTag: FC<IHTagProps> = ({
	tag = HTagType.H1,
	muted = false,
	className,
	...props
}: IHTagProps): ReactNode =>
	createElement(tag, {
		className: cn(styles.heading, styles.h1, className, { [styles.muted]: muted }),
		...props,
	});
