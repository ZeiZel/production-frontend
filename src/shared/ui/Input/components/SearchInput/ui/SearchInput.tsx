import React, { ForwardedRef, forwardRef } from 'react';
import { cn } from '@/shared/lib';
import { BaseInput, EIcons, Icon } from '@/shared/ui';
import styles from './SearchInput.module.scss';
import { ISearchInputProps } from './SearchInput.props';

/** поле поиска по странице */
export const SearchInput = forwardRef<HTMLInputElement, ISearchInputProps>(
	(
		{ errorMessage, ...props }: ISearchInputProps,
		ref: ForwardedRef<HTMLInputElement>,
	) => (
		<span className={cn(styles.search)}>
			<Icon name={EIcons.Search} equal={15} className={cn(styles.search__icon)} />
			<BaseInput
				{...props}
				ref={ref}
				stretch
				className={cn(styles.search__input)}
			/>
		</span>
	),
);
