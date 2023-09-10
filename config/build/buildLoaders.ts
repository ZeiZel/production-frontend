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
                        // включаем модульные стили (классы с именами asdWQSsaQ) только если они содержат в названии module
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

    return [typescriptLoader, stylesLoader];
}