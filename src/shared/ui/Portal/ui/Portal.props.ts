import { ReactNode } from 'react';

export interface IPortalProps {
	/** компонент, который будет отрисовываться */
	children: ReactNode;
	/** конечная точка, в которой он должен отрисоваться */
	element?: Element | DocumentFragment;
}
