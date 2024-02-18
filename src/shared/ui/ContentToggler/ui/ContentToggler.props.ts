import { ReactElement, ReactNode } from 'react';
import { ISlideSelectProps } from '@/shared/ui';

interface IToggleElement {
	order: number;
	element: ReactElement[] | ReactNode[] | ReactNode | ReactElement;
}

interface IToggleTitle {
	order: number;
	title: string;
}

interface IActionButton {
	title: string;
	route: string;
}

export interface IContentToggleProps {
	toggleTitle: IToggleTitle[];
	toggleElement: IToggleElement[];
	style: ISlideSelectProps['selectType'];
	actionButton?: IActionButton;
}
