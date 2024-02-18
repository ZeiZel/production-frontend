import { render, screen } from '@testing-library/react';
import { Button, EButtonType } from '@/shared/ui';

describe('Button', () => {
	test('Button Rendered', () => {
		render(
			<Button className={'test__button'} appearance={EButtonType.PRIMARY} size={'m'}>
				Кнопка
			</Button>,
		);

		expect(screen.getByText('Кнопка')).toBeInTheDocument();
	});
});
