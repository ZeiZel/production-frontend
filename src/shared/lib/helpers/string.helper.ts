import { ReactNode } from 'react';

export type TStringCaseFormat = 'toUpper' | 'toLower' | 'none';

export class StringHelper {
	private static stringGuard(value: unknown): value is string {
		return typeof value === 'string';
	}

	public static formatCase(value: string | ReactNode, type: TStringCaseFormat): string | ReactNode {
		if (this.stringGuard(value)) {
			switch (type) {
				case 'toUpper':
					return value.toUpperCase();
				case 'toLower':
					return value.toLowerCase();
				case 'none':
				default:
					return value;
			}
		}

		return value;
	}
}
