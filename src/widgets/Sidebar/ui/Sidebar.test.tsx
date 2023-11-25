import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from '@/widgets/Sidebar';
import { TestRendererHelper } from '@/shared/lib';

describe('Sidebar', () => {
	/** проверяем, отрендерен ли сайдбар */
	test('render sidebar', () => {
		/* компоненты, которые используют перевод нужно обернуть в хок withTranslation или обернуть в провайдер, как тут */
		TestRendererHelper.withTranslation(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	/** проверяем, свёрнут ли сайдбар */
	test('toggle sidebar', () => {
		TestRendererHelper.withTranslation(<Sidebar />);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		const sidebar = screen.getByTestId('sidebar');
		fireEvent.click(toggleBtn);
		expect(sidebar).toHaveClass('collapsed');
	});
});
