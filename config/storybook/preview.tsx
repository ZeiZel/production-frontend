import { Theme } from '../../src/app/providers/ThemeProvider';
import {
	withRouterDecorator,
	withStyleDecorator,
	withSuspenseDecorator,
	withThemeDecorator,
} from '../../src/shared/lib';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	layout: 'centered',
	themes: {
		default: Theme.LIGHT,
		list: [
			{ name: Theme.LIGHT, class: Theme.LIGHT, color: '#aeaeae' },
			{ name: Theme.DARK, class: Theme.DARK, color: '#2a2a2a' },
		],
	},
	decorators: [
		withStyleDecorator,
		withSuspenseDecorator,
		withRouterDecorator,
		withThemeDecorator(Theme.DARK),
	],
};
