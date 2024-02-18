import { render, screen } from '@testing-library/react';
import { Button, Modal } from '@/shared/ui';

/*
 * todo
 *  - написать тесты для отображения модалки
 *  - написать тест для скрытия модалки
 * */

describe('Modal', () => {
	test('Modal Rendered', () => {
		render(<Modal label={<Button>Кликни</Button>}>Контент модалки</Modal>);

		expect(screen.getByText('Кнопка')).toBeInTheDocument();
	});
});
