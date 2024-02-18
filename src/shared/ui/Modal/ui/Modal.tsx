import React, { FC } from 'react';
import { cn, useModal } from '@/shared/lib';
import { Portal } from '@/shared/ui/Portal/ui/Portal';
import { AnimatedWrapper } from '../../AnimatedWrapper';
import { Button, EButtonType } from '../../Button';
import { Card, ECardRound, ECardType } from '../../Card';
import { EIcons, Icon } from '../../Icon';
import styles from './Modal.module.scss';
import { IModalProps } from './Modal.props';

/** компонент модального окна */
export const Modal: FC<IModalProps> = ({
	children,
	label,
	modalShowed = false,
}: IModalProps) => {
	const { modalRef, modalExpanded, handleOpenModal } = useModal({ modalShowed });

	return (
		<div ref={modalRef} className={styles.modal}>
			<div onClick={handleOpenModal} className={styles.modal__item}>
				{label && <span className={styles.modal__visible}>{label}</span>}
				{modalExpanded && (
					<Portal>
						<AnimatedWrapper
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className={cn('overlay', styles.modal__wrapper)}
						>
							<AnimatedWrapper
								initial={{ opacity: 0, y: -20 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.2 }}
							>
								<Card
									appearance={ECardType.PRIMARY}
									className={styles.modal__content}
									onClick={(e) => e.stopPropagation()}
									round={ECardRound.XXL}
								>
									<div className={styles.modal__close}>
										<Button
											appearance={EButtonType.MUTED}
											onClick={handleOpenModal}
											circle
											size={'unsized'}
										>
											<Icon
												name={EIcons.Close}
												alt={'Закрыть'}
												width={15}
												height={15}
											/>
										</Button>
									</div>
									{children}
								</Card>
							</AnimatedWrapper>
						</AnimatedWrapper>
					</Portal>
				)}
			</div>
		</div>
	);
};
