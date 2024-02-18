import React from 'react';
import { IImageProps } from './Image.props';

/** компонент изображения */
export const Image = ({
	src,
	srcSet,
	alt = 'Изображение',
	width = 200,
	height = 200,
	className,
	...props
}: IImageProps) => {
	return (
		<img
			className={className}
			src={src as string}
			srcSet={srcSet}
			alt={alt}
			width={width}
			height={height}
			{...props}
		/>
	);
};
