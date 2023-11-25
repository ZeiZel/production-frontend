import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import { EIcons } from '../model';

export interface IIconProps
	extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	name: EIcons;
}
