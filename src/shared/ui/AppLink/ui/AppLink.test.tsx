import { render, screen } from '@testing-library/react';
import { AppLink } from '@/shared/ui';

describe('AppLink', () => {
	test('AppLink Rendered', () => {
		render(<AppLink href={'/'}>Ссылка</AppLink>);

		expect(screen.getByText('Ссылка')).toBeInTheDocument();
	});
});
