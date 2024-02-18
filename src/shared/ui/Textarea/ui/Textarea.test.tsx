import { render, screen } from '@testing-library/react';
import { Textarea } from '@/shared/ui';

describe('Textarea', () => {
	test('Textarea Rendered', () => {
		render(<Textarea>Поле с большим количеством текста</Textarea>);

		expect(screen.getByText('Поле с большим количеством текста')).toBeInTheDocument();
	});
});
