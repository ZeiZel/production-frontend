import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorPage } from '@/widgets/ErrorPage';
import { Skeleton } from '@/widgets/Skeleton';

/* пропсы компонента */
interface ErrorBoundaryProps {
	children: ReactNode;
}

/* стейт компонента */
interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		/* todo реализовать сервис для логирования ошибок на странице */
		console.log(error, errorInfo);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) {
			return (
				<Suspense fallback={<Skeleton />}>
					<ErrorPage />
				</Suspense>
			);
		}

		return children;
	}
}
