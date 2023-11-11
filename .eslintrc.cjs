module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		'browser': true,
		'es2021': true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	/* расширения конфига */
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'prettier',
		"plugin:i18next/recommended"
	],
	overrides: [
		{
			'env': {
				'node': true,
			},
			'files': [
				'.eslintrc.{js,cjs}',
			],
			'parserOptions': {
				'sourceType': 'script',
			},
		},
	],
	/* опции для парсера */
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	/* объявление глобальных переменных, которые доступны во всём приложении */
	globals: {
		__API__: true,
		__IS_DEV__: true,
	},
	/* подключение внешних плагинов */
	'plugins': [
		"unicorn",
		'import',
		'react',
		'i18next',
		'react-hooks',
		'jsx-a11y',
		'@typescript-eslint',
	],
	/* настройка правил  */
	'rules': {
		'no-undef': 'warn',
		/* нельзя использовать объявленные ранее имена (даже внутри другого скоупа) */
		'no-shadow': 'warn',
		/* неиспользуемые переменные запрещены */
		'no-unused-vars': 'warn',
		'no-underscore-dangle': 'off',
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'import/no-unresolved': 'off',
		'react-hooks/rules-of-hooks': 'error',
		/* запрещает просто вводить текст в JSX - можно только через перевод */
		"i18next/no-literal-string": ['error', { markupOnly: true }],
		/* неиспользуемые переменные запрещены (TS) */
		'@typescript-eslint/no-unused-vars': 'warn'
	},
};
