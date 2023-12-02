import React, {
	MouseEventHandler,
	MutableRefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

interface IModalProps {
	/** начальное состояние модального окна */
	isOpened?: boolean;
}

interface IModalResult {
	/** реф на модальное окно */
	modalRef: MutableRefObject<HTMLDivElement | null>;
	/** функция открытия модального окна */
	handleOpenModal: () => void;
	/** состояние модального окна */
	modalExpanded: boolean;
	/** функция, которая останавливает всплытие события */
	stopPropagation: MouseEventHandler<HTMLDivElement>;
}

/** хук логики модального окна */
export const useModal = ({ isOpened = false }: IModalProps = {}): IModalResult => {
	/** состояние отображения модального окна */
	const [modalExpanded, setModalExpanded] = useState<boolean>(isOpened);

	/** реф, от которого и будет работать закрытие модального окна */
	const modalRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

	/** функция для изменения состояния окна */
	const handleOpenModal = useCallback(() => setModalExpanded((prevState) => !prevState), []);
	/** останавливает всплытие события */
	const stopPropagation: MouseEventHandler<HTMLDivElement> = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation(),
		[],
	);
	/** функция закрытия модалки на Esc */
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			setModalExpanded(false);
		}
	}, []);
	/** отлавливает событие закрытия окна и закрывает модалку */
	const handleModalClick = useCallback((event: MouseEvent) => {
		if (modalRef.current && !modalRef.current?.contains(event.target as Node)) {
			setModalExpanded(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener('click', handleModalClick);

		if (modalExpanded) {
			document.addEventListener('keydown', onKeyDown);
		}

		return () => {
			document.removeEventListener('click', handleModalClick);
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [handleModalClick, modalExpanded, onKeyDown]);

	return {
		modalRef,
		handleOpenModal,
		modalExpanded,
		stopPropagation,
	};
};
