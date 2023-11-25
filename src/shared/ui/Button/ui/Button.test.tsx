import { render, screen } from '@testing-library/react';
import { Button, EButtonType } from '@/shared/ui';

describe('Button', () => {
	test('button text', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('button classname', () => {
		render(<Button appearance={EButtonType.PRIMARY}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('button appearance__primary size__m');
	});
});
