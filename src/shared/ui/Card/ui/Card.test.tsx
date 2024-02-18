import { render, screen } from '@testing-library/react';
import { Card } from '@/shared/ui';

describe('Card', () => {
	test('Card Rendered', () => {
		render(<Card>Содержимое карты</Card>);

		expect(screen.getByText('Содержимое карты')).toBeInTheDocument();
	});
});
