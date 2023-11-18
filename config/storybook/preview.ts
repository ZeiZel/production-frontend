import { Theme } from '../../src/app/providers/ThemeProvider';
import { SuspenseDecorator } from './decorators/Suspense.decorator';
import { RouterDecorator } from './decorators/Router.decorator';
import { ThemeDecorator } from './decorators/Theme.decorator';
import { StyleDecorator } from './decorators/Style.decorator';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	layout: 'fullscreen',
	themes: {
		default: 'light',
		list: [
			{ name: 'light', class: Theme.LIGHT, color: '#aeaeae' },
			{ name: 'dark', class: Theme.DARK, color: '#2a2a2a' },
		],
	},
	decorators: [SuspenseDecorator, RouterDecorator, ThemeDecorator(Theme.LIGHT), StyleDecorator],
};
