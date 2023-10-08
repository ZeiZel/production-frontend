import React, { StrictMode, Suspense } from 'react';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { Skeleton } from '@/widgets/Skeleton';
import '@/shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root') as HTMLElement);

if (!root) {
	throw new Error('В приложение не вмонтирован root div !!');
}

root.render(
	<BrowserRouter>
		<ThemeProvider>
			<StrictMode>
				<Suspense fallback={<Skeleton />}>
					<App />
				</Suspense>
			</StrictMode>
		</ThemeProvider>
	</BrowserRouter>,
);
