import React from 'react';
import cn from 'clsx';
import { Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.scss';
import { useTheme } from './model/providers/ThemeProvider';
import { Theme } from './model/providers/ThemeProvider/lib/ThemeContext';
import { AppRouter } from '@/app/model/providers/RouterProvider';

export const App = () => {
	const { toggleTheme, theme } = useTheme();

	return (
		<div
			className={cn('app', {
				['light']: theme === Theme.LIGHT,
				['dark']: theme === Theme.DARK,
			})}
		>
			<button className={'button'} onClick={toggleTheme}>
				toggle
			</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О нас</Link>
			<AppRouter/>
		</div>
	);
};