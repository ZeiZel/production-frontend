import { motion } from 'framer-motion';
import React from 'react';
import { IAnimatedWrapperProps } from './AnimatedWrapper.props';

export const AnimatedWrapper = ({ index, children, ...props }: IAnimatedWrapperProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index ? index * 0.1 : undefined }}
			exit={{ opacity: 0 }}
			{...props}
		>
			{children}
		</motion.div>
	);
};
