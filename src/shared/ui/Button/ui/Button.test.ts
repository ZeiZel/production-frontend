import { NameHelper } from '@/shared/lib/helpers';

describe('Button', () => {
	test('click', () => {
		expect(NameHelper.getFirstName('ASd asd ASDASDA')).toBe('asd');
	});
});
