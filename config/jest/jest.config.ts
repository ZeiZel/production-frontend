import type { Config } from 'jest';

const config: Config = {
	/*
	 * корневая точка
	 * мы её настраиваем так как
	 * */
	rootDir: '../../',
	/* очищаем моковые данные */
	clearMocks: true,
	/* разворачиваемся в браузере */
	testEnvironment: 'jsdom',
	/* эту директорию не трогаем */
	coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
	moduleDirectories: ['node_modules'],
	/* настройки для запуска тестов с ипользованием абсолютных импортов */
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	/* доступные расширения файлов */
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	/* регулярка, по которой находим файлы с тестами */
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
};

export default config;
