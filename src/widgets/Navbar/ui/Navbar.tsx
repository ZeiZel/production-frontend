import React from 'react';
import cn from 'clsx';
import styles from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui';
import { INavbarProps } from './Navbar.props';

export const Navbar = ({ className }: INavbarProps) => {
	return (
		<div className={cn(styles.navbar, className)}>
			<div className={styles.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.links__main}>
					Главная
				</AppLink>
				<AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
					О сайте
				</AppLink>
			</div>
		</div>
	);
};
