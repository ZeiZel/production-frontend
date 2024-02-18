import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TStringCaseFormat } from '@/shared/lib';
import { TPSize } from '../model';

export interface IPProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	/** запрещает пернос текста */
	noWrap?: boolean;
	/** мьютит текст */
	muted?: boolean;
	/** переводит текст в жирный */
	bold?: boolean;
	/** определяет размер текста */
	size?: TPSize;
	/** форматирует текст */
	formatText?: TStringCaseFormat;
}
