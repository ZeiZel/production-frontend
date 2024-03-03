import React from 'react';
import { cn } from '@/shared/lib';
import styles from './Grid.module.scss';
import { IGridProps } from './Grid.props';

export const Grid = ({
	display = 'flex',
	gap,
	col,
	row,
	items,
	justify,
	wrap,
	center,
	columns,
	rows,
	children,
	className,
	...props
}: IGridProps) => {
	const buildCssString = (name: string, nums?: number | number[]) =>
		nums ? (Array.isArray(nums) ? `${name}-${nums.join('-')}` : `${name}-${nums}`) : name;

	if (display === 'none') {
		return null;
	}

	return (
		<div
			className={cn(className, {
				[styles[display]]: display,
				[styles.center]: center,
				[styles.col]: col,
				[styles.row]: row,
				[styles[`${items}`]]: !!items,
				[styles[`${justify}`]]: !!justify,
				[styles[`${wrap}`]]: !!wrap,
				[styles[buildCssString('gap', gap)]]: !!gap,
				[styles[buildCssString('columns', columns)]]: !!columns,
				[styles[buildCssString('rows', rows)]]: !!rows,
			})}
			{...props}
		>
			{children}
		</div>
	);
};
