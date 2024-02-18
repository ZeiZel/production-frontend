import { ReactNode } from 'react';

export interface IDropDownProps {
	/** заголовок */
	title: ReactNode | string;
	/** вложенные данные */
	details: ReactNode | string;
	/** отключенный бэкграунд */
	ghost?: boolean;
	/** начальное состояние */
	initState?: boolean;
	/** растягивает блок заголовка на всю ширину */
	titleStretch?: boolean;
	className?: string;
}
