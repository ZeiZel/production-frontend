import {
	WebpackPluginInstance,
	ProgressPlugin,
	DefinePlugin,
	HotModuleReplacementPlugin,
} from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] => {
	const plugins = [
		// то плагин, который будет показывать прогресс сборки
		new ProgressPlugin(),
		// это плагин, который будет добавлять самостоятельно скрипт в наш index.html
		new HTMLWebpackPlugin({
			// указываем путь до базового шаблона той вёрстки, которая нужна в нашем проекте
			template: paths.html,
		}),
		// этот плагин будет отвечать за отделение чанков с css от файлов JS
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		// этот плагин позволяет прокидывать глобальные переменные в приложение
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__API__: JSON.stringify('https://' /* api_path */),
		}),
		/* данный плагин анализирует размеры собираемых пакетов */
		new BundleAnalyzerPlugin({
			/*
			 * отключаем автоматические открытие анализатора
			 * он будет открываться по ссылке из терминала
			 * */
			openAnalyzer: false,
		}),
	];

	if (isDev) {
		plugins.push(
			// данный плагин уже нужен для рефреша реакт-компонентов
			new ReactRefreshWebpackPlugin(),
		);
		plugins.push(
			// данный плагин отвечает за горячую замену модулей без перезагрузки приложения
			new HotModuleReplacementPlugin(),
		);
	}

	return plugins;
};
