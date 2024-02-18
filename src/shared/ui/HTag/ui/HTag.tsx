import { createElement, FC, ReactElement } from 'react';
import { cn } from '@/shared/lib';
import { EHTag } from '../model/types/htag.type';
import styles from './HTag.module.scss';
import { IHTagProps } from './HTag.props';

/**
 * Заголовок приложения
 * */
export const HTag: FC<IHTagProps> = ({
	tag = EHTag.H2,
	muted = false,
	center = false,
	className,
	...props
}: IHTagProps): ReactElement => {
	const classNamesList = cn(
		styles.heading,
		styles[tag],
		{ [styles.muted]: muted, [styles.center]: center },
		className,
	);

	return createElement<Omit<IHTagProps, 'tag'>>(tag, {
		className: classNamesList,
		...props,
	});
};
