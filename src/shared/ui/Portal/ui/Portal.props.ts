import { ReactNode } from 'react';

export interface IPortalProps {
	children: ReactNode;
	targetNode?: Element | DocumentFragment;
	key?: string;
}
