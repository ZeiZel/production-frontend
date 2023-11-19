import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loader/style.loader';

/*
 * конфиг был прогнан через команду:
 * npx storybook@next automigrate
 * */

const config = {
	stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-addon-mock',
		'storybook-addon-themes',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	core: {},
	docs: {
		autodocs: true,
	},
	webpackFinal: async (config: Configuration) => {
		const paths = {
			build: '',
			html: '',
			entry: '',
			src: path.resolve(__dirname, '..', '..', 'src'),
			locales: '',
			buildLocales: '',
		};
		config!.resolve!.modules!.push(paths.src);
		config!.resolve!.extensions!.push('.ts', '.tsx');
		config!.resolve!.alias = {
			...config!.resolve!.alias,
			'@': paths.src,
		};

		/* если в каком-либо правиле есть svg, то мы вернём старый объект и заэксклюдим svg в правиле */
		config!.module!.rules = config!.module!.rules!.map(
			// @ts-ignore
			(rule: RuleSetRule) => {
				if (/svg/.test(rule.test as string)) {
					return { ...rule, exclude: /\.svg$/i };
				}

				return rule;
			},
		);

		/* а тут уже доавим свгр, который преобразует svg */
		config!.module!.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		config!.module!.rules.push(buildCssLoader(true));

		config!.plugins!.push(
			new DefinePlugin({
				__IS_DEV__: JSON.stringify(true),
				__API__: JSON.stringify('https://testapi.ru'),
				__PROJECT__: JSON.stringify('storybook'),
			}),
		);

		return config;
	},
};

export default config;
