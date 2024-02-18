import React, { useState } from 'react';
import { cn } from '@/shared/lib';
import { AnimatedWrapper } from '../../AnimatedWrapper';
import { Card, ECardRound, ECardType } from '../../Card';
import { EIcons, Icon } from '../../Icon';
import styles from './Collapse.module.scss';
import { IDropDownProps } from './Collapse.props';

/**
 * Компонент коллапса данных
 * */
export const Collapse = ({
	title,
	titleStretch = true,
	details,
	ghost = false,
	className,
	initState = false,
}: IDropDownProps) => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(initState);

	const handleToggleMenu = () => setToggleMenu((prevState) => !prevState);

	return (
		<Card
			stretch
			appearance={ghost ? ECardType.GHOST : ECardType.PRIMARY}
			shadow={ghost ? 'none' : 'primary'}
			round={ECardRound.L}
			className={cn(styles.dropdown, className, {
				[styles['dropdown__title-stretch']]: titleStretch,
			})}
		>
			<div className={styles.dropdown__title} onClick={handleToggleMenu}>
				{title}
				<Icon
					name={EIcons.ArrowRight}
					width={5}
					height={5}
					className={cn(styles.dropdown__arrow, {
						[styles.rotate]: toggleMenu,
					})}
				/>
			</div>
			{toggleMenu && (
				<AnimatedWrapper
					initial={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.3 }}
				>
					<div className={cn(styles.dropdown__description)}>{details}</div>
				</AnimatedWrapper>
			)}
		</Card>
	);
};
