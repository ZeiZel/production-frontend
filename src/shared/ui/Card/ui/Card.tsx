import { createElement } from 'react';
import { cn } from '@/shared/lib';
import styles from './Card.module.scss';
import { ECardTag, ECardType, ICardProps } from './Card.props';

/** компонент карточки в приложении */
export const Card = ({
	tag = ECardTag.DIV,
	appearance = ECardType.PRIMARY,
	children,
	className,
	...props
}: ICardProps) =>
	createElement(tag, {
		className: cn(className, styles.card, styles[`appearance__${appearance}`]),
		children,
		...props,
	});
