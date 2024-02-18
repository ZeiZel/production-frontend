import { render, screen } from '@testing-library/react';
import { Collapse, P } from '@/shared/ui';

describe('Collapse', () => {
	test('Collapse Rendered', () => {
		render(<Collapse title={'Коллапс'} details={<P>Контент</P>} />);

		expect(screen.getByText('Коллапс')).toBeInTheDocument();
	});
});
