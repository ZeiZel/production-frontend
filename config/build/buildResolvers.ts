import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        // указываем расширения файлов, которые не нужно будет указывать при импорте
        extensions: ['.tsx', '.ts', '.js', '.scss'],
        // абсолютные пути будут приоритетнее
        preferAbsolute: true,
        // абсолютные пути, от которых идут импорты
        modules: [options.paths.src, 'node_modules'],
        // основной файл для каждой папки
        // mainFields: ['index'], // не работает react-router из-за этого свойства
        // настройки обозначений абсолютных путей - тут просто будет путь
        alias: {
            "@": options.paths.src,
        },
    };
}