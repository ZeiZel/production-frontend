import { CSSProperties } from 'react';
import { IDivAttributes } from '@/shared/types';

export interface IGridProps extends IDivAttributes {
	display: 'none' | 'flex' | 'grid';
	row?: boolean;
	center?: boolean;
	rowReverse?: boolean;
	col?: boolean;
	colReverse?: boolean;
	wrap?: boolean;
	noWrap?: boolean;
	wrapReverse?: boolean;
	gap?: number;
	columns?: number | number[];
	rows?: number | number[];
	justify?: CSSProperties['justifyContent'];
	items?: CSSProperties['alignItems'];
}
