import { IDivAttributes } from '@/shared/types';

export enum ECardType {
	PRIMARY = 'primary',
	GHOST = 'ghost',
}

export enum ECardTag {
	DIV = 'div',
	FOOTER = 'footer',
	HEADER = 'header',
	SECTION = 'section',
	MAIN = 'main',
}

export interface ICardProps extends IDivAttributes {
	/** тег карточки */
	tag?: ECardTag;
	/** тип карточки */
	appearance?: ECardType;
}
