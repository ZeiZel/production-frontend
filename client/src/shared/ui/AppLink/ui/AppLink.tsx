import { FC } from 'react';
import cn from 'clsx';
import { Link } from 'react-router-dom';
import styles from './AppLink.module.scss';
import { IAppLinkProps, AppLinkTheme } from './AppLink.props';

export const AppLink: FC<IAppLinkProps> = ({
	   to,
	   className,
	   children,
	   theme = AppLinkTheme.PRIMARY,
	   ...props
   }) => {

	return (
		<Link
			to={to}
			className={cn(styles.link, className, [styles[theme]])}
			{...props}
		>
			{children}
		</Link>
	);
};

