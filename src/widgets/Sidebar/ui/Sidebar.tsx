import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'clsx';
import styles from './Sidebar.module.scss';
import { ISidebarProps } from './Sidebar.props';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';

export const Sidebar = ({ className }: ISidebarProps) => {
	const { t } = useTranslation('ui');
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const onToggle = () => setCollapsed((prev) => !prev);

	return (
		<div
			data-testid={'sidebar'}
			className={cn(styles.sidebar, className, { [styles.collapsed]: collapsed })}
		>
			<button data-testid={'sidebar-toggle'} onClick={onToggle}>
				{t('toggle')}
			</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher />
			</div>
		</div>
	);
};
