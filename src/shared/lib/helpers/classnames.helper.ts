/** тип объекта с классами */
type ClassObject = {
	[key: string]: boolean;
};

/** аргументы функции cn */
type TClassValue = string | number | boolean | null | undefined | ClassObject;

/**
 * функция для сборки классов
 * @param {Array} args - аргументы для билда классов
 * @returns {String} string - результирующая строка
 * */
export const cn = (...args: TClassValue[]): string => {
	const classes: string[] = [];

	args.forEach((arg: TClassValue) => {
		if (Array.isArray(arg)) {
			classes.push(...arg.filter(Boolean).map(String));
		} else if (typeof arg === 'string') {
			classes.push(arg);
		} else if (typeof arg === 'object' && arg !== null) {
			Object.keys(arg).forEach((key) => {
				if (arg[key]) {
					classes.push(key);
				}
			});
		}
	});

	return classes.join(' ');
};
