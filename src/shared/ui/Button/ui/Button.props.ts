import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export enum ThemeButton {
	CLEAR = 'clear',
}

export interface IButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
	theme?: ThemeButton;
}