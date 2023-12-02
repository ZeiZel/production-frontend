import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { cn } from '@/shared/lib';
import { Button, Loader, Modal } from '@/shared/ui';
import styles from './Sidebar.module.scss';
import { ISidebarProps } from './Sidebar.props';

export const Sidebar = ({ className }: ISidebarProps) => {
	const { t } = useTranslation('ui');
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const onToggle = () => setCollapsed((prev) => !prev);

	return (
		<div
			data-testid={'sidebar'}
			className={cn(styles.sidebar, className, { [styles.collapsed]: collapsed })}
		>
			<Button data-testid={'sidebar-toggle'} onClick={onToggle}>
				{t('toggle')}
			</Button>
			<Modal
				content={<>Очень много контента, который тут находится</>}
				label={<Button>Открыть модалку</Button>}
			/>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher />
			</div>
		</div>
	);
};
