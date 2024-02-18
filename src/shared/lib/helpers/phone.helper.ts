/**
 * Хелпер для работы с номерами телефонов
 * */
export class PhoneHelper {
	/** данный метод переводит формат +0 (000) 000-00-00 в 00000000000 */
	public static getClearPhone(value: string) {
		return value.replace(/\D/g, '');
	}
}
