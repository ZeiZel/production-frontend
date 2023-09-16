import React, { StrictMode } from 'react';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<ThemeProvider>
			<StrictMode>
				<App />
			</StrictMode>
		</ThemeProvider>
	</BrowserRouter>,
);
