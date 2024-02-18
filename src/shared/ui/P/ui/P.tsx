import React, { FC } from 'react';
import { StringHelper, cn } from '@/shared/lib';
import styles from './P.module.scss';
import { IPProps } from './P.props';

/** Компонент текста */
export const P: FC<IPProps> = ({
	size = 'm',
	noWrap = false,
	muted = false,
	bold = false,
	formatText = 'none',
	children,
	className,
	...props
}: IPProps) => {
	return (
		<p
			className={cn(styles.p, className, styles[`size__${size}`], {
				[styles.muted]: muted,
				[styles.bold]: bold,
				[styles.noWrap]: noWrap,
			})}
			{...props}
		>
			{StringHelper.formatCase(children, formatText)}
		</p>
	);
};
