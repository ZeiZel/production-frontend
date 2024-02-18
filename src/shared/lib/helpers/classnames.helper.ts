type TClass = string | number | boolean | null | undefined;

/** тип объекта с классами */
type ClassObject = {
	[key: string]: TClass | object;
};

/** аргументы функции cn */
type TClassValue = TClass | ClassObject;

/**
 * функция для сборки классов
 * @param {Array} args - аргументы для билда классов
 * @returns {String} string - результирующая строка
 * */
export const cn = (...args: TClassValue[]): string => {
	if (args.length === 1 && typeof args[0] === 'string') return args[0];

	const classes: string[] = [];

	args.forEach((arg) => {
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
