import { render, screen } from '@testing-library/react';
import { P } from '@/shared/ui';

describe('P', () => {
	test('P uppercase', () => {
		render(
			<P size={'m'} formatText={'toUpper'}>
				Параграф
			</P>,
		);

		expect(screen.getByText('ПАРАГРАФ')).toBeInTheDocument();
	});
});
