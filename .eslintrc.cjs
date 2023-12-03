module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	/* расширения конфига */
	extends: [
		'@feature-sliced',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'prettier',
		'plugin:i18next/recommended',
	],
	overrides: [
		{
			'env': {
				'node': true,
			},
			'files': [
				'.eslintrc.{js,cjs}',
				'**/src/**/*.test.{ts,tsx}',
			],
			'parserOptions': {
				'sourceType': 'script',
			},
			rules: {
				'i18next/no-literal-string': 'off',
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
		'unicorn',
		'import',
		'react',
		'i18next',
		'react-hooks',
		'jsx-a11y',
		'@typescript-eslint',
	],
	/* настройка правил  */
	'rules': {
		'no-console': 'error',
		'react/no-children-prop': 'off',
		'react/display-name': 'off',
		/* начиная с React 17, нам не нужно импортировать реакт во все файлы */
		'react/react-in-jsx-scope': 'off',
		/*
		* проверяет максимальную длину строки
		* если комментарий, то игнорирует
		*  */
		'max-len': ['error', { code: 100, ignoreComments: true }],
		'no-undef': 'warn',
		/* нельзя использовать объявленные ранее имена (даже внутри другого скоупа) */
		'no-shadow': 'warn',
		/* неиспользуемые переменные запрещены */
		'no-unused-vars': 'warn',
		'no-underscore-dangle': 'off',
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		/*  */
		'import/no-unresolved': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		/* запрещает просто вводить текст в JSX - можно только через перевод */
		'i18next/no-literal-string': ['error', { markupOnly: true }],
		/* неиспользуемые переменные запрещены (TS) */
		'@typescript-eslint/no-unused-vars': 'warn',
	},
};
