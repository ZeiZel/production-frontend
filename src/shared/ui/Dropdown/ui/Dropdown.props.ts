import { ReactNode } from 'react';

export interface IDropdownProps {
	/** вложенный элемент */
	children: ReactNode;
	/** заголовок */
	label: ReactNode;
	/** состояние дропдауна извне */
	state?: boolean;
}
