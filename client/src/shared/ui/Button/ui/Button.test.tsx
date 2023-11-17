import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from '@/shared/ui';

describe('Button', () => {
	test('button text', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('button classname', () => {
		render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('clear');
	});
});
