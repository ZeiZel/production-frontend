import { MotionProps } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IAnimatedWrapperProps
	extends Omit<
			DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
			'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref' | 'style' | 'children'
		>,
		MotionProps {
	index?: number;
}
