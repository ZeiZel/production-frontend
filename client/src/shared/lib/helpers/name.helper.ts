export class NameHelper {
	/*
	 * Метод, который получает из ФИО только имя
	 * @params fullName string
	 * @returns name string
	 * */
	public static getFirstName(fullName: string) {
		return fullName.split(' ')[1];
	}
}
