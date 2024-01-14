import React, { StrictMode, Suspense } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Skeleton } from '@/widgets/Skeleton';
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
					<StoreProvider>
						<Suspense fallback={<Skeleton />}>
							<App />
						</Suspense>
					</StoreProvider>
				</StrictMode>
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
);
