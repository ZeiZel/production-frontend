import React, { useState } from 'react';
import cn from 'clsx';
import styles from './Sidebar.module.scss';
import { ISidebarProps } from './Sidebar.props';
import { ThemeSwitcher } from '@/shared/ui';

export const Sidebar = ({ className }: ISidebarProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const onToggle = () => setCollapsed((prev) => !prev);

	return (
		<div className={cn(styles.sidebar, className, { [styles.collapsed]: collapsed })}>
			<button onClick={onToggle}>toggle</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	);
};