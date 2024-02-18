import React, { forwardRef, ForwardedRef, memo } from 'react';
import { StringHelper, cn } from '@/shared/lib';
import { EIcons, Icon } from '../../Icon';
import { EButtonType } from '../model';
import styles from './Button.module.scss';
import { IButtonProps } from './Button.props';

/**
 * Основная кнопка приложения
 * */
export const Button = memo(
	forwardRef<HTMLButtonElement, IButtonProps>(
		(
			{
				appearance = EButtonType.PRIMARY,
				arrow = 'none',
				stretch = false,
				rounded = 'm',
				outlined = false,
				shadow = 'none',
				formatText = 'none',
				size = 'm',
				circle = false,
				image,
				type = 'button',
				children,
				className,
				...props
			}: IButtonProps,
			ref: ForwardedRef<HTMLButtonElement>,
		) => {
			const handleArrow = (arrowSide: string) => {
				switch (arrowSide) {
					case 'right':
						return <Icon name={EIcons.ArrowRight} alt='стрелка вправо' />;
					case 'bottom':
						return (
							<Icon
								name={EIcons.ArrowRight}
								alt='стрелка вниз'
								style={{ transform: 'rotate(90deg)' }}
							/>
						);
					case 'none':
					default:
						return null;
				}
			};

			return (
				<button
					{...props}
					type={type}
					data-testid={'button'}
					ref={ref}
					className={cn(
						styles.button,
						className,
						styles[appearance],
						styles[`size__${size}`],
						styles[`rounded__${rounded}`],
						styles[`shadow__${shadow}`],
						{
							[styles.stretch]: stretch,
							[styles.outlined]: outlined,
							[styles.circle]: circle,
						},
					)}
				>
					{handleArrow(arrow)}
					{image && (
						<Icon
							name={image}
							alt={String(children)}
							width={20}
							height={20}
							className={styles.button__image}
						/>
					)}
					{StringHelper.formatCase(children, formatText)}
				</button>
			);
		},
	),
);
