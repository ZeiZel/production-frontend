import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'clsx';
import styles from './AppLink.module.scss';
import { AppLinkTheme, IAppLinkProps } from './AppLink.props';

export const AppLink = ({
		theme = AppLinkTheme.PRIMARY,
		to,
		children,
		className,
		...props
	}: IAppLinkProps) => {
	return (
		<Link
			to={to}
			className={cn(styles.link, className, styles[theme])}
			{...props}
		>
			{children}
		</Link>
	);
};