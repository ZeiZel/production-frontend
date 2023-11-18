import { DetailedHTMLProps, HTMLAttributes } from 'react';

export enum HTagType {
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	H4 = 'h4',
	H5 = 'h5',
	H6 = 'h6',
}

export interface IHTagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	tag: HTagType;
	muted?: boolean;
}
