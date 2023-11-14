import { EIcons } from '../model';
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface IIconProps
	extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	name: EIcons;
}
