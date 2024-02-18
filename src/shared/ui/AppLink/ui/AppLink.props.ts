import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IAppLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	/** отсутствие эффекта при наведении */
	nohover?: boolean;
	/** тип внешняя или внутренняя ссылка */
	type?: 'external' | 'internal';
	/** иконка */
	icon?: string;
	/** побочная иконка */
	semilink?: boolean;
	/** скрытая */
	ghost?: boolean;
	/** цветная */
	colored?: boolean;
	/**  */
	arrow?: boolean;
}
