import { render, screen } from '@testing-library/react';
import { EHTag, HTag } from '@/shared/ui';

describe('HTag', () => {
	test('HTag Rendered', () => {
		render(<HTag tag={EHTag.H1}>Заголовок</HTag>);

		expect(screen.getByText('Заголовок')).toBeInTheDocument();
	});
});
