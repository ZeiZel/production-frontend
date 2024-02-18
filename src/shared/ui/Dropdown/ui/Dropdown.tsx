import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { AnimatedWrapper } from '../../AnimatedWrapper';
import styles from './Dropdown.module.scss';
import { IDropdownProps } from './Dropdown.props';

/** компонент выпадающего контента */
export const Dropdown: FC<IDropdownProps> = ({
	label,
	children,
	state,
}: IDropdownProps) => {
	const [opened, setOpened] = useState<boolean>(state || false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	/* проверяем, кликнул пользователь по этому элементу или нет */
	const handleOutsideClick = useCallback((event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			setOpened(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [handleOutsideClick]);

	return (
		<div ref={dropdownRef} className={styles.modal}>
			<span
				className={styles.modal__button}
				onClick={() => setOpened((prevState) => !prevState)}
			>
				{label}
			</span>
			{opened && (
				<AnimatedWrapper
					initial={{ opacity: 0, y: 5 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 0 }}
					transition={{ duration: 0.2 }}
					className={styles.modal__window}
				>
					{children}
				</AnimatedWrapper>
			)}
		</div>
	);
};
