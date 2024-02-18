import React from 'react';
import styles from './Loader.module.scss';
import { ILoaderProps } from './Loader.props';

export const Loader = ({ ...props }: ILoaderProps) => {
	return <div className={styles.loader} {...props} />;
};
