import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'clsx';
import styles from './AppLink.module.scss';
import { IAppLinkProps, AppLinkTheme } from './AppLink.props';

export const AppLink: FC<IAppLinkProps> = ({
	to,
	className,
	children,
	theme = AppLinkTheme.PRIMARY,
	...props
}: IAppLinkProps) => {
	return (
		<Link to={to} className={cn(styles.link, className, [styles[theme]])} {...props}>
			{children}
		</Link>
	);
};
