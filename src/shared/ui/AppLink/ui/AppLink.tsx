import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/shared/lib';
import { EIcons, Icon } from '../../Icon';
import styles from './AppLink.module.scss';
import { IAppLinkProps } from './AppLink.props';

/** компонент ссылка */
export const AppLink = ({
	semilink = false,
	ghost = false,
	colored = false,
	arrow = false,
	nohover = false,
	type = 'internal',
	target = '_blank',
	href,
	children,
	className,
	...props
}: IAppLinkProps) =>
	type === 'internal' ? (
		<Link
			className={cn(styles.link, className, {
				[styles.semilink]: semilink,
				[styles.nohover]: nohover,
				[styles.colored]: colored,
				[styles.ghost]: ghost,
			})}
			to={href as string}
		>
			{children}
			{arrow && (
				<Icon
					name={EIcons.ArrowRight}
					className={styles.link__arrow}
					width={10}
					height={10}
				/>
			)}
		</Link>
	) : (
		<a
			className={cn(styles.link, className, {
				[styles.semilink]: semilink,
				[styles.nohover]: nohover,
				[styles.colored]: colored,
				[styles.ghost]: ghost,
			})}
			target={target}
			href={href}
			{...props}
		>
			{children}
			{arrow && (
				<Icon
					name={EIcons.ArrowRight}
					className={styles.link__arrow}
					width={10}
					height={10}
				/>
			)}
		</a>
	);
