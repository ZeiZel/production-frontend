import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	// так как порядок некоторых лоадеров важен, то важные лоадеры можно выносить в отдельные переменные
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	// лоадер для SVG изображений
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	// лоадер для добавления изображений в проект
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const stylesLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// в зависимости от режима разработки будет применяться разный лоадер
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// так же лоадеры можно передавать в виде объектов, если нужно к ним добавить опции
			{
				loader: 'css-loader',
				options: {
					// включаем поддержку модулей у лоадера
					modules: {
						// включаем модульные стили только если они содержат в названии module
						auto: (resPath: string) => !!resPath.includes('.module.'),
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:8]'
							: '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	};

	/* лоадер, который позволит использовать бейбел */
	const babelLoader = {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	};

	/*
	 * typescriptLoader должен идти после babelLoader
	 * */
	return [fileLoader, svgLoader, babelLoader, typescriptLoader, stylesLoader];
}
