import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loader/style.loader';
import { buildFileLoader } from './loader/file.loader';
import { buildBabelLoader } from './loader/babel.loader';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
	/* лоадер для добавления изображений в проект */
	const fileLoader = buildFileLoader();
	/* лоадер стилей */
	const stylesLoader = buildCssLoader(options.isDev);
	/* два лоадера, которые будут собирать ts и js файлы */
	const tsBabelLoader = buildBabelLoader({ ...options, isTsx: true });
	const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });

	return [fileLoader, codeBabelLoader, tsBabelLoader, stylesLoader];
}
