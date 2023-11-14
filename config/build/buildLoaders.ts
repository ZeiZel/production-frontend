import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loader/style.loader';
import { buildFileLoader } from './loader/file.loader';
import { buildSvgLoader } from './loader/svg.loader';
import { buildBabelLoader } from './loader/babel.loader';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
	/* лоадер для SVG изображений */
	const svgLoader = buildSvgLoader();
	/* лоадер для добавления изображений в проект */
	const fileLoader = buildFileLoader();
	const stylesLoader = buildCssLoader(options.isDev);
	/* лоадер, который позволит использовать бейбел */
	const tsBabelLoader = buildBabelLoader({ ...options, isTsx: true });
	const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });

	return [fileLoader, svgLoader, codeBabelLoader, tsBabelLoader, stylesLoader];
}
