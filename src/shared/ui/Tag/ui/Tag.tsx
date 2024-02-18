import React, { ReactNode } from 'react';
import { Card, ECardType } from '@/shared/ui';
import styles from './Tag.module.scss';

interface ITagProps {
	children: ReactNode;
	iconColor?: string;
}

export const Tag = ({ children, iconColor = '' }: ITagProps) => {
	const iconStyle = iconColor ? { backgroundColor: iconColor } : {};

	return (
		<Card appearance={ECardType.GHOST} shadow={'none'} enableBorder className={styles['tag']}>
			<div className={styles['tag__icon']} style={iconStyle} />
			<div className='tag__content'>{children}</div>
		</Card>
	);
};
