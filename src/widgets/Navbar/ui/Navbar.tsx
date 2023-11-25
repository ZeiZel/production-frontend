import cn from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from '@/shared/ui';
import styles from './Navbar.module.scss';
import { INavbarProps } from './Navbar.props';

export const Navbar = ({ className }: INavbarProps) => {
	const { t } = useTranslation('ui');

	return (
		<div className={cn(styles.navbar, className)}>
			<div className={styles.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.links__main}>
					{t('main')}
				</AppLink>
				<AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
					{t('about')}
				</AppLink>
			</div>
		</div>
	);
};
