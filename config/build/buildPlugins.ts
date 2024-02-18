import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
	WebpackPluginInstance,
	ProgressPlugin,
	DefinePlugin,
	HotModuleReplacementPlugin,
} from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths, project, isDev, apiUrl }: BuildOptions): WebpackPluginInstance[] => {
	const plugins = [
		// это плагин, который будет добавлять самостоятельно скрипт в наш index.html
		new HTMLWebpackPlugin({
			// указываем путь до базового шаблона той вёрстки, которая нужна в нашем проекте
			template: paths.html,
		}),
		// то плагин, который будет показывать прогресс сборки
		new ProgressPlugin(),
		// этот плагин позволяет прокидывать глобальные переменные в приложение
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__API__: JSON.stringify(apiUrl),
			__PROJECT__: JSON.stringify(project),
		}),
		/* данный плагин будет вываливать ошибку, если зависимости будут зациклены */
		/*new CircularDependencyPlugin({
			exclude: /node_modules/,
			failOnError: true,
		}),
		new ForkTsCheckerWebpackPlugin({
			typescript: {
				diagnosticOptions: {
					semantic: true,
					syntactic: true,
				},
				mode: 'write-references',
			},
		}),*/
	];

	if (isDev) {
		// данный плагин уже нужен для рефреша реакт-компонентов
		plugins.push(
			new ReactRefreshWebpackPlugin(),
		);
		// данный плагин отвечает за горячую замену модулей без перезагрузки приложения
		plugins.push(
			new HotModuleReplacementPlugin(),
		);
		/* данный плагин анализирует размеры собираемых пакетов */
		plugins.push(new BundleAnalyzerPlugin({
			/*
			 * отключаем автоматические открытие анализатора
			 * он будет открываться по ссылке из терминала
			 * */
			openAnalyzer: false,
		}));
	}

	if (!isDev) {
		// этот плагин будет отвечать за отделение чанков с css от файлов JS
		plugins.push(new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}));
		/* plugins.push(new CopyPlugin({
			patterns: [
				{ from: paths.locales, to: paths.buildLocales },
			],
		})); */
	}

	return plugins;
};
