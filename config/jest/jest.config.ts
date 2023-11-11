import type { Config } from 'jest';

const config: Config = {
	/*
	 * корневая точка
	 * мы её настраиваем так как
	 * */
	rootDir: '../..',
	/* очищаем моковые данные */
	clearMocks: true,
	/* разворачиваемся в браузере */
	testEnvironment: 'jsdom',
	/* эту директорию не трогаем */
	coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
	moduleDirectories: ['node_modules'],
	/* доступные расширения файлов */
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	/* регулярка, по которой находим файлы с тестами */
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
};

export default config;
