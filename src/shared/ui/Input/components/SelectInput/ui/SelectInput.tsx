import React, { FC } from 'react';
import { BaseInput } from '../../BaseInput';
import styles from './SelectInput.module.scss';
import { ISelectInputProps } from './SelectInput.props';

/** инпут для выбора нужного элемента из представленных */
export const SelectInput: FC<ISelectInputProps> = () => {
	return (
		<div className={styles.select}>
			<BaseInput />
		</div>
	);
};
