import { createElement, ForwardedRef, forwardRef } from 'react';
import { cn } from '@/shared/lib';
import { ECardRound, ECardTag, ECardType } from '../model';
import styles from './Card.module.scss';
import { ICardProps } from './Card.props';

/** Компонент-обёртка, который представляет собой любую карточку в проекте */
export const Card = forwardRef<HTMLDivElement, ICardProps>(
	(
		{
			appearance = ECardType.PRIMARY,
			round = ECardRound.M,
			enableBorder = false,
			stretch = false,
			shadow = 'primary',
			tag = ECardTag.DIV,
			className,
			...props
		}: ICardProps,
		ref: ForwardedRef<HTMLDivElement>,
	) =>
		createElement<ICardProps>(tag, {
			ref,
			className: cn(
				styles.card,
				className,
				styles[`round__${round}`],
				styles[`bg__${appearance}`],
				styles[`shadow__${shadow}`],
				{
					[styles.bordered]: enableBorder,
					[styles.stretch]: stretch,
				},
			),
			...props,
		}),
);
