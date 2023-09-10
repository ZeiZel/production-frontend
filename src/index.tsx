import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import ThemeProvider from './app/model/providers/ThemeProvider/ui/ThemeProvider';

const root = createRoot(document.querySelector('#root') as HTMLElement);
root.render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>,
);