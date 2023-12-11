import React, { ChangeEvent, MutableRefObject, useEffect, useId, useRef, useState } from 'react';
import { cn } from '@/shared/lib';
import { InputProps } from './Input.props';

export const Input = ({ autofocus, onChange, value, type = 'text', ...props }: InputProps) => {
	const id = useId();
	const ref: MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement>(null);
	const [focus, setFocus] = useState<boolean>(false);

	/** стили при активном инпуте */
	const onFocus = () => setFocus(true);
	/** стили при выходе из инпута */
	const onBlur = () => setFocus(false);

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.value);
	};

	useEffect(() => {
		if (autofocus) {
			setFocus(true);
			ref.current?.focus();
		}
	}, [autofocus]);

	return (
		<label htmlFor={id} className={cn()}>
			<input
				ref={ref}
				id={id}
				type={type}
				onChange={handleOnChange}
				value={value}
				onFocus={onFocus}
				onBlur={onBlur}
				{...props}
			/>
		</label>
	);
};
