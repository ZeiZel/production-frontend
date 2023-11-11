import cn from 'clsx';

describe('Button', () => {
	test('click', () => {
		expect(cn('className')).toBe('className');
	});
});
