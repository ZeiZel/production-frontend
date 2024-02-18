import { render, screen } from '@testing-library/react';
import { SelectInput } from '@/shared/ui';

describe('List', () => {
	test('List Rendered', () => {
		render(
			<SelectInput values={[{ value: 'card1', title: 'Карта ****4643' }]}>Карта</SelectInput>,
		);

		expect(screen.getByText('Карта')).toBeInTheDocument();
	});
});
