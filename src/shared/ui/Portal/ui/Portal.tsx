import { createPortal } from 'react-dom';
import { IPortalProps } from './Portal.props';

/** портал для рендера компонентов в отдельных частях приложения */
export const Portal = ({ children, element = document.body }: IPortalProps) =>
	createPortal(children, element);
