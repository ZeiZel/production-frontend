import React from 'react';
import styles from './Skeleton.module.scss';

export const Skeleton = () => (
	<div className={styles.skeleton}>
		<div className={styles.skeleton__header}>
			<div className={styles.header}>
				<div className={styles.header__logo}></div>
				<div className={styles.header__nav}></div>
				<div className={styles.header__avatar}></div>
			</div>
		</div>
		<div className={styles.skeleton__sidebar}>
			<div className={styles.sidebar}>
				<div className={styles.sidebar__profile}></div>
				<div className={styles.sidebar__list}></div>
				<div className={styles.sidebar__settings}></div>
			</div>
		</div>
		<div className={styles.skeleton__main}>
			<div className={styles.skeleton__post}>
				<div className={styles.post}>
					<div className={styles.post__header}></div>
					<div className={styles.post__body}></div>
					<div className={styles.post__bottom}></div>
				</div>
			</div>
		</div>
	</div>
);
