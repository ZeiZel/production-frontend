import React from 'react';
import './styles/index.scss';
import { AppRouter } from '@/app/providers';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useTheme } from '@/shared/lib';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<Navbar />
			<div className='content-page'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	);
};

export default App;
