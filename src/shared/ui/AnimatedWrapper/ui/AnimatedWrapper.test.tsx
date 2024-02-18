import { render, screen } from '@testing-library/react';
import { AnimatedWrapper } from '@/shared/ui';

describe('AnimatedWrapper', () => {
	test('present', () => {
		render(<AnimatedWrapper/>);
	});
});
