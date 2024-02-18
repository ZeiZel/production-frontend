import React from 'react';
import { createPortal } from 'react-dom';
import { IPortalProps } from './Portal.props';

export const Portal = ({ children, targetNode = document.body, key }: IPortalProps) => {
	return createPortal(children, targetNode, key);
};
