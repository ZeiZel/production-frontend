import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

export interface IAppLinkProps extends LinkProps {
	children: ReactNode;
	theme?: AppLinkTheme;
}
