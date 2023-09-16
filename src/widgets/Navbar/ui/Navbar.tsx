import React from 'react';
import cn from 'clsx'
import styles from './Navbar.module.scss';
import { INavbarProps } from './Navbar.props';
import { AppLink, AppLinkTheme } from '@/shared/ui';
import { ThemeSwitcher } from '@/widgets';

export const Navbar = ({ className }: INavbarProps) => {
	return (
		<nav className={cn(styles.navbar, className)}>
			<div className={styles.navbar__links}>
				<ThemeSwitcher />
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
					Главная
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
					О нас
				</AppLink>
			</div>
		</nav>
	);
};