import { render, screen } from '@testing-library/react';
import { Button, Dropdown } from '@/shared/ui';

describe('Dropdown', () => {
	test('Dropdown Rendered', () => {
		render(<Dropdown label={<Button>Нажми меня</Button>}>Очень много контента</Dropdown>);

		expect(screen.getByText('Нажми меня')).toBeInTheDocument();
	});
});
