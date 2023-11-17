import { BuildOptions } from './types/config';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port, // порт
        // open: true, // автоматически будет открывать страницу в браузере
        // данная команда позволяет проксиовать запросы через index страницу, чтобы при обновлении страницы не выпадала ошибка
        historyApiFallback: true,
    };
}