import { IImageAttributes } from '@/shared/types';

export enum EImageType {
	SVG = 'image/svg+xml',
	WEBP = 'image/webp',
}

export interface IImageProps extends Omit<IImageAttributes, 'src'> {
	src: unknown;
}
