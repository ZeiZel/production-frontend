import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import { AppLink } from '@/shared/ui';
import styles from './Navbar.module.scss';
import { INavbarProps } from './Navbar.props';

export const Navbar = ({ className }: INavbarProps) => {
	const { t } = useTranslation('ui');

	return (
		<div className={cn(styles.navbar, className)}>
			<div className={styles.links}>
				<AppLink href={'/'} className={styles.links__main}>
					{t('main')}
				</AppLink>
				<AppLink href={'/about'}>{t('about')}</AppLink>
			</div>
		</div>
	);
};
