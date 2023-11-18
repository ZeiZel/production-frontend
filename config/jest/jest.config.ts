import type { Config } from 'jest';

const config: Config = {
	/* устанавливаем сюда глобальные переменные */
	globals: {
		__IS_DEV__: true,
		__API__: '/test/api',
		__PROJECT__: 'jest',
	},
	/* очищаем моковые данные */
	clearMocks: true,
	/*
	 * корневая точка
	 * мы её настраиваем так как
	 * */
	rootDir: '../../',
	modulePaths: ['<rootDir>src'],
	/* разворачиваемся в браузере */
	testEnvironment: 'jsdom',
	/* настройки для запуска тестов с ипользованием
	 * - абсолютных импортов
	 * - стилей
	 * */
	moduleNameMapper: {
		/* эта настройка нужна для поддержки абсолютных импортов */
		'^@/(.*)$': '<rootDir>/src/$1',
		'\\.s?css$': 'identity-obj-proxy',
		/* чтобы работали svg, их нужно заменить на моковый компонент */
		'\\.(svg|png|jpg)': '<rootDir>/config/jest/jestEmptyComponent.tsx',
	},
	moduleDirectories: ['node_modules', '<rootDir>/'],
	/* эту директорию не трогаем */
	coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
	/* доступные расширения файлов */
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	/* регулярка, по которой находим файлы с тестами */
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
	/* тут мы определяем путь до файла с сетапмами джеста */
	setupFilesAfterEnv: ['<rootDir>config/jest/jest.setup.ts'],
	/* тут настроен репорт для проходок тестов */
	reporters: [
		'default',
		[
			'jest-html-reporters',
			{
				publicPath: '<rootDir>/reports/unit',
				filename: 'report.html',
				// openReport: true,
				inlineSource: true,
			},
		],
	],
};

export default config;
