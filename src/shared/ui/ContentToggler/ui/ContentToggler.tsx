import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedWrapper, Button, EButtonType, ListSelect, P } from '@/shared/ui';
import styles from './ContentToggler.module.scss';
import { IContentToggleProps } from './ContentToggler.props';

export const ContentToggler = ({
	style,
	toggleElement,
	toggleTitle,
	actionButton,
}: IContentToggleProps) => {
	const [selectedContent, setSelectedContent] = useState<number>(1);

	const handleSelectOrder = (order: number) => setSelectedContent(order);

	return (
		<div className={styles.toggle}>
			<div className={styles.toggle__actions}>
				<div className={styles.toggle__navigation}>
					<ListSelect
						selectType={style}
						selectedTitle={selectedContent}
						titles={toggleTitle}
						handleChange={handleSelectOrder}
					/>
				</div>
				{actionButton && (
					<div className={styles.toggle__buy}>
						<Link to={actionButton.route}>
							<Button appearance={EButtonType.PRIMARY}>{actionButton.title}</Button>
						</Link>
					</div>
				)}
			</div>
			<div className={styles.toggle__items}>
				{toggleElement.map(
					({ order, element }, listIndex: number) =>
						order === selectedContent && (
							<div key={order}>
								{/* так как элемент вполне себе может быть и не массивом, то стоит предоставить возможность выводить и просто один элемент */}
								{element instanceof Array ? (
									element.length !== 0 ? (
										element.map((elem, elementIndex: number) => (
											<AnimatedWrapper
												key={elementIndex}
												index={elementIndex}
												className={styles.toggle__item}
											>
												<div>{elem}</div>
											</AnimatedWrapper>
										))
									) : (
										<P muted>Продукты отсутсвуют</P>
									)
								) : (
									<AnimatedWrapper
										index={listIndex}
										className={styles.toggle__item}
									>
										{element}
									</AnimatedWrapper>
								)}
							</div>
						),
				)}
			</div>
		</div>
	);
};
