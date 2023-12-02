import React from 'react';
import { useModal } from '@/shared/lib';
import { Card } from '../../Card';
import { Portal } from '../../Portal';
import styles from './Modal.module.scss';
import { IModalProps } from './Modal.props';

export const Modal = ({ content, label, isOpened = false }: IModalProps) => {
	const { modalRef, modalExpanded, handleOpenModal, stopPropagation } = useModal({ isOpened });

	return (
		<div ref={modalRef} className={styles.modal}>
			<div onClick={handleOpenModal}>
				<span className={styles.modal__label}>{label}</span>
				{modalExpanded && (
					<Portal>
						<div onClick={handleOpenModal} className={styles.modal__overlay}>
							<Card onClick={stopPropagation} className={styles.modal__content}>
								{content}
							</Card>
						</div>
					</Portal>
				)}
			</div>
		</div>
	);
};
