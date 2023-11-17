import React, { StrictMode, Suspense } from 'react';
import { Root, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { Skeleton } from '@/widgets/Skeleton';
import App from '@/app/App';
import '@/shared/config/i18n/i18n';

const root: Root = createRoot(document.getElementById('root') as HTMLElement);

if (!root) {
	throw new Error('В приложение не вмонтирован root div !!');
}

root.render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<StrictMode>
					<Suspense fallback={<Skeleton />}>
						<App />
					</Suspense>
				</StrictMode>
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
);
