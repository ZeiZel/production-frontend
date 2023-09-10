// режим, в котором мы находимся
export type BuildMode = 'production' | 'development';

// это будет объект со строками путей
export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

// интерфейс переменных окружения, которые будут попадать в конфиг
export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

// опции, которые будет принимать вебпак
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}