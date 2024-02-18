import { render, screen } from '@testing-library/react';
import { EIcons, Icon } from '@/shared/ui';

describe('Icon', () => {
	test('Icon Rendered', () => {
		render(<Icon name={EIcons.Other} alt={'Другое'} width={30} height={30} />);

		expect(screen.getByAltText('Другое')).toBeInTheDocument();
	});
});
