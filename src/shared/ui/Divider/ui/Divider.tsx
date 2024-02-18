import React, { FC, ReactElement } from 'react';
import { cn } from '@/shared/lib';
import styles from './Divider.module.scss';
import { IDelimiterProps } from './Divider.props';

/**
 * дивайдер приложения (hr)
 * */
export const Divider: FC<IDelimiterProps> = ({
	className,
	...props
}: IDelimiterProps): ReactElement => (
	<hr data-testid={'divider'} className={cn(className, styles.divider)} {...props} />
);
