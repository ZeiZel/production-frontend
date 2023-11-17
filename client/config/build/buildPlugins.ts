import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
    return [
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
    ];
}