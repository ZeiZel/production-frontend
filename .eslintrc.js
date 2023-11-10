module.export = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier',
	],
	plugins: ['import', 'react', 'react-hooks', 'jsx-a11y', 'prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				parser: 'typescript',
				printWidth: 100,
				singleQuote: true,
				jsxSingleQuote: true,
				useTabs: true,
				tabWidth: 4,
				semi: true,
				arrowParens: 'always',
				trailingComma: 'all',
			},
		],
		'import/no-unresolved': 'off',
		'no-undef': 'warn',
		'no-unused-vars': 'warn',
		'react/prop-types': 0,
		'react-hooks/rules-of-hooks': 'error',
	},
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: ['**/*.js', '**/*.jsx'],
			parser: 'babel-eslint',
			rules: {},
		},
	],
};
