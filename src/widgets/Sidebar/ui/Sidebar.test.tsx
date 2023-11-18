import { render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { Sidebar } from '@/widgets';

describe('Sidebar', () => {
	test('toggle sidebar', () => {
		/* компоненты, которые используют перевод нужно обернуть в withTranslation */
		const SidebarWithTranslation = withTranslation()(Sidebar);
		render(<SidebarWithTranslation />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
});
