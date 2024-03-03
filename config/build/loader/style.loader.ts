import autoprefixer from 'autoprefixer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/**
 * Лоадер для обработки стилей
 * @param {boolean} isDev режим разработки
 * */
export function buildStyleLoader(isDev: boolean) {
	return {
		test: /\.s[ac]ss?$/i,
		exclude: /node_modules/,
		use: [
			/**
			 * в деве стили будет собирать стайл-лоадер
			 * в проде стили будут минифицироваться
			 * */
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					/**
					 * включаем поддержку модулей у лоадера
					 * */
					modules: {
						auto: (resPath: string) => !!resPath.includes('.module.'),
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:8]'
							: '[hash:base64:8]',
					},
				},
			},
			/**
			 * автоматически подставляет нужные префиксы ко всем стилям
			 * */
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						plugins: [autoprefixer()],
					},
					sourceMap: isDev,
				},
			},
			'sass-loader',
		],
	};
}
