import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

const getApiUrl = (mode: BuildMode, apiUrl?: string) => {
	if (apiUrl) {
		return apiUrl;
	}
	if (mode === 'production') {
		return '/api';
	}

	return 'http://localhost:8000';
};

const pathResolver = (...args: string[]) => path.resolve(__dirname, ...args);

export default (env: BuildEnv): Configuration => {
	const paths: BuildPaths = {
		entry: pathResolver('src', 'index.tsx'),
		build: pathResolver('build'),
		html: pathResolver('public', 'index.html'),
		src: pathResolver('src'),
		locales: pathResolver('public', 'locales'),
		buildLocales: pathResolver('build', 'locales'),
	};

	const mode = env.mode || 'development';
	const isDev = mode === 'development';
	const PORT = env.port || 3000;
	const apiUrl = getApiUrl(mode, env?.apiUrl);

	return buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
		apiUrl,
		project: 'frontend',
	});
};
