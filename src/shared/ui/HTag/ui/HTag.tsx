import React, { FC, ReactNode } from 'react';
import cn from 'clsx';
import styles from './HTag.module.scss';
import { HTagType, IHTagProps } from './HTag.props';

export const HTag: FC<IHTagProps> = ({
	tag,
	muted = false,
	className,
	children,
	...props
}: IHTagProps): ReactNode => {
	switch (tag) {
		case HTagType.H1:
			return (
				<h1
					className={cn(styles.heading, styles.h1, className, { [styles.muted]: muted })}
					{...props}
				>
					{children}
				</h1>
			);
		case HTagType.H2:
			return (
				<h2
					className={cn(styles.heading, styles.h2, className, { [styles.muted]: muted })}
					{...props}
				>
					{children}
				</h2>
			);
		case HTagType.H3:
			return (
				<h3
					className={cn(styles.heading, styles.h3, className, { [styles.muted]: muted })}
					{...props}
				>
					{children}
				</h3>
			);
		case HTagType.H4:
			return (
				<h4
					className={cn(styles.heading, styles.h4, className, { [styles.muted]: muted })}
					{...props}
				>
					{children}
				</h4>
			);
		case HTagType.H5:
			return (
				<h5
					className={cn(styles.heading, styles.h5, className, { [styles.muted]: muted })}
					{...props}
				>
					{children}
				</h5>
			);
		case HTagType.H6:
		default:
			return (
				<h6
					className={cn(styles.heading, styles.h6, className, { [styles.muted]: muted })}
					{...props}
				>
					{children}
				</h6>
			);
	}
};
