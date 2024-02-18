import React, { ForwardedRef, forwardRef, useState } from 'react';
import { cn } from '@/shared/lib';
import { EIcons, Icon, P } from '@/shared/ui';
import { BaseInput } from '../../BaseInput';
import styles from './RangeInput.module.scss';
import { IRangeProps } from './RangeInput.props';

const formatNumber = (num: number) => num.toLocaleString().replace(',', '');
const unFormatNumber = (num: string) => Number(num.replace(/\D/gi, ''));

// TODO: Может можно все по красоте сделать?

/** поле ввода из определённого диапазона */
export const RangeInput = forwardRef<HTMLInputElement, IRangeProps>(
	(
		{ range, value, onChange, stretch = false, prefix, ...props }: IRangeProps,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		const [inputValue, setInputValue] = useState<number>(
			Number(value) > 0 ? Number(value) : range.max / 2,
		);
		const [showPrefix, setShowPrefix] = useState(true);

		const handleChange = (value: string) => {
			value = String(Math.min(unFormatNumber(value), range.max));

			onChange?.(value);
			setInputValue(Number(value));
		};

		return (
			<span
				className={cn(styles.range, {
					[styles['range--stretch']]: stretch,
				})}
			>
				<label className={styles['range__input-wrapper']}>
					<BaseInput
						{...props}
						ref={ref}
						style={{ width: `${String(inputValue).length * 13}px` }} // TODO: Что за магическое число???
						value={formatNumber(inputValue)}
						onChange={handleChange}
						stretch
						className={styles.range__input}
						onFocus={() => setShowPrefix(false)}
						onBlur={() => setShowPrefix(true)}
					/>
					{showPrefix ? (
						<>
							{prefix && showPrefix ? <P size={'l'}>{prefix}</P> : null}
							<Icon
								className={styles['range__edit-icon']}
								name={EIcons.Edit}
								width={14}
								height={15}
							/>
						</>
					) : null}
				</label>
				<BaseInput
					type={'range'}
					value={`${inputValue}`}
					min={range.min}
					max={range.max}
					onChange={handleChange}
					className={styles.range__slider}
				/>
				<div className={styles['range__boundaries']}>
					<P size={'xs'} muted>
						От {formatNumber(range.min)}
						{prefix ? ` ${prefix}` : ''}
					</P>
					<P size={'xs'} muted>
						До {formatNumber(range.max)}
						{prefix ? ` ${prefix}` : ''}
					</P>
				</div>
			</span>
		);
	},
);
