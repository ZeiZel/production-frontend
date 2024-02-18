import { render, screen } from '@testing-library/react';
import { Divider } from '@/shared/ui';

describe('Divider', () => {
	test('Divider Rendered', () => {
		render(<Divider />);

		expect(screen.getByTestId('divider')).toBeInTheDocument();
	});
});
