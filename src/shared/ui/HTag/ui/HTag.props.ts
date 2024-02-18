import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { EHTag } from '@/shared/ui';

export interface IHTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	/** тег заголовка */
	tag: EHTag;
	/** центрирует заголовок */
	center?: boolean;
	/** мьютит заголовок */
	muted?: boolean;
}
