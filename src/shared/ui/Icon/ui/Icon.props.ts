import { IImageAttributes } from '@/shared/types';
import { EIcons } from '@/shared/ui';

export interface IIconProps extends IImageAttributes {
	/** имя иконки, которое определит выбранную иконку */
	name: EIcons;
	/** равные размеры */
	equal?: number;
}
