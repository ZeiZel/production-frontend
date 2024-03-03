import { ReactNode } from 'react';
import { TIdType } from '@/shared/types';

export interface IListProps<T> {
	expand?: {
		expanded: boolean;
		count: number;
	};
	list: T[];
	renderFn: (index: TIdType, item: T) => ReactNode;
}
