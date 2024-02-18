type TDeepId<T> = {
	id: string;
} & {
	[P in keyof T]: T[P] extends object ? TDeepId<T[P]> : T[P];
};

export const addUniqueId = <T>(obj: T): TDeepId<T> => {
	if (Array.isArray(obj)) {
		return obj.map((item) => addUniqueId(item)) as TDeepId<typeof obj>;
	}

	if (typeof obj === 'object' && obj !== null) {
		/* todo протипизировать этот момент через infer (но работает вроде и без этого) */
		/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
		const newObj: any = { ...obj, id: Math.random().toString(36).slice(2, 11) };
		Object.keys(newObj).forEach((key) => {
			newObj[key] = addUniqueId(newObj[key]);
		});
		return newObj;
	}

	return obj as TDeepId<T>;
};
