import { ReactNode } from 'react';

export interface IModalProps {
	/** внешний компонент */
	label?: ReactNode;
	/** вложенный компонент */
	children: ReactNode;
	/** состояние модалки */
	modalShowed?: boolean;
}
