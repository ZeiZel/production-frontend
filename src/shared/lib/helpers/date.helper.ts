import { format } from 'date-fns';
import { EFormatTemplate, MONTH_NAME } from '@/shared/const';

export class DateHelper {
	public static getFinalDate(period: number): string {
		return format(new Date().setDate(new Date().getDate() - period), EFormatTemplate.DATE);
	}

	public static getCurrentDate(): string {
		return format(Date.now(), EFormatTemplate.DATE);
	}

	public static getCurrentTime(): string {
		return format(Date.now(), EFormatTemplate.TIME);
	}

	public static getMonthName(): string {
		const monthNumber = Number(this.getCurrentDate().split('.')[1]);
		return MONTH_NAME[monthNumber - 1];
	}

	public static formatDate(date: number | Date, formatTemplate: EFormatTemplate): string {
		switch (formatTemplate) {
			case EFormatTemplate.DATE_MONTH:
				return new Intl.DateTimeFormat('ru-RU', {
					// year: 'numeric',
					month: 'long',
					day: '2-digit',
				}).format(date);
			default:
				return String(format(date, formatTemplate));
		}
	}
}
