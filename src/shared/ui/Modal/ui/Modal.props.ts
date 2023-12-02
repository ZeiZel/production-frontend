import { ReactNode } from 'react';

export interface IModalProps {
	/** триггер открытия модалки */
	label: ReactNode;
	/** контент модалки */
	content: ReactNode;
	/** начальное состояние модалки */
	isOpened?: boolean;
}
