export const API_BASE = '/rest/stateful/';
export const API_PUBLIC = '/rest/public/';

export const API_CORP = 'corp/'; // сервис юридических лиц
export const API_PERSONAL = 'personal/'; // сервис физических лиц

export const API_BANK = 'khln/';

/*
 * !Ремарка
 * Если роут начинается с __API__, то он идёт напрямую в ибтест без /rest/stateful/
 * */
export const API = {
	public: {
		json: '/public/json',
	},
	faq: {
		getFaq: `${API_BASE + API_PERSONAL + API_BANK}/faq`,
	},
	auth: {
		register: {
			register: `${API_PUBLIC}/registration_by_card/input`,
			confirmRegister: `${API_PUBLIC}/registration_by_card/confirm`,
			confirmAgain: `${API_PUBLIC}/registration_by_card/send_again`,
		},
		restore: {
			restore: `${API_PUBLIC}/restore_by_card/input`,
			confirmRestore: `${API_PUBLIC}/restore_by_card/confirm`,
			confirmAgain: `${API_PUBLIC}/restore_by_card/send_again`,
			postRestoreNewLogin: `${API_PUBLIC}/restore_by_card/login_pass_input`,
		},
		login: {
			continueSession: `${API_BASE + API_PERSONAL + API_BANK}/session/continue`,
			ping: `${API_BASE + API_PERSONAL}/ping`,
			qrAuth: `${API_BASE + API_PERSONAL}/qr`,
			login: `${API_BASE + API_PERSONAL}/login`,
		},
		logout: `${API_BASE + API_PERSONAL}/logout`,
	},
	transfer: {
		sbp: {
			bankList: `${API_BASE + API_PERSONAL + API_BANK}/sbp/banks/v2`,
			checkClientPhone: `${API_BASE + API_PERSONAL + API_BANK}/sbp/searchClientByPhoneNumber`,
			payByPhone: `${API_BASE + API_PERSONAL + API_BANK}/sbp/document/create/transferbyphone`,
			fromAnotherBAnk: ``,
		},
		// переводы
		postTransferByWallet: ``,
		postTransferByPhone: ``,
		postTransferByQr: ``,
		// оплата мобильного
		postPayMobile: ``,
	},
	currency: {
		getExchangeRateShort: `${API_BASE + API_PERSONAL + API_BANK}/currency_rate`,
	},
	deposit: {
		getActive: `${API_BASE + API_PERSONAL + API_BANK}/deposit`,
	},
	document: {
		getDocument: `${API_BASE + API_PERSONAL}/document/visual/byid`,
		postGenerateFile: `${API_BASE + API_PERSONAL + API_BANK}/document/generator/pdf`,
		postPrintFile: `${API_BASE + API_PERSONAL}/print`,
		confirmDocumentCheck: `${API_BASE + API_PERSONAL}/document/confirmation/request`,
		confirmDocument: `${API_BASE + API_PERSONAL}/document/confirmation/check/v2`,
		getReferenceList: `${API_BASE + API_PERSONAL + API_BANK}/document/generator/reference`,
		getDocumentHistory: `${API_BASE + API_PERSONAL}/doc_history/`,
		deleteDocument: `${API_BASE + API_PERSONAL}/delete'/document/`,
	},
	history: {
		getHistoryList: `${API_BASE + API_PERSONAL}/pageable/document/visual/page`,
	},
	insurance: {
		getUserInsurances: `${API_BASE + API_PERSONAL + API_BANK}/insurance`,
		getGroupsOfInsurances: `${API_BASE + API_PERSONAL + API_BANK}/insurance/group`,
		getInsuranceList: `${API_BASE + API_PERSONAL + API_BANK}/insurance/type/all`,
		getInsuranceItem: `${API_BASE + API_PERSONAL + API_BANK}/insurance/type`,
		postInsuranceRequestToCreate: `${API_BASE + API_PERSONAL + API_BANK}/insurance/request`,
	},
	news: {
		getNews: `${API_BASE + API_PERSONAL + API_BANK}/news/`,
		postNewsReaction: `${API_BASE + API_PERSONAL + API_BANK}/news/reaction`,
	},
	promotion: {
		getEquity: `${API_BASE + API_PERSONAL + API_BANK}/promotion`,
	},
	loyaltyProgram: {
		getLoyalty: `${API_BASE + API_PERSONAL + API_BANK}/loyaltyProgram`, // get
		attachLoyalty: `${API_BASE + API_PERSONAL + API_BANK}/loyaltyProgram/request`, // post
	},
	sms: {
		enableSms: `${API_BASE + API_PERSONAL + API_BANK}/sms_information/on`,
		disableSms: `${API_BASE + API_PERSONAL + API_BANK}/sms_information/off`,
	},
	cards: {
		getCardProducts: `${API_BASE + API_PERSONAL + API_BANK}/card/type/all`,
		getCardProduct: `${API_BASE + API_PERSONAL + API_BANK}/card/type/`,
		getActiveCards: `${API_BASE + API_PERSONAL + API_BANK}/card`,
		postOpenCard: `${API_BASE + API_PERSONAL + API_BANK}/card/request`,
	},
	credit: {
		getCredit: `${API_BASE + API_PERSONAL + API_BANK}/credit/`,
		getActiveCredits: `${API_BASE + API_PERSONAL}/credit/`,
		getCreditGroups: `${API_BASE + API_PERSONAL + API_BANK}/credit/group`,
		getCreditProducts: `${API_BASE + API_PERSONAL + API_BANK}/credit/type/all`,
		getCreditOverdraft: `${API_BASE + API_PERSONAL + API_BANK}/credit/type/overdraft`,
		getCreditRequests: `${API_BASE + API_PERSONAL + API_BANK}/credit/request`,
		/*  */
		postCreateCreditDocument: `${API_BASE + API_PERSONAL + API_BANK}/credit/`,
		postCreditPipeline: `${API_BASE + API_PERSONAL + API_BANK}/credit/pipeline/info`,
		postSignDocumentVault: `${API_BASE + API_PERSONAL + API_BANK}/credit/sign/confirm`,
		postCreditRequests: `${API_BASE + API_PERSONAL + API_BANK}/credit/request`,
	},
	template: {
		getTemplateList: `${API_BASE + API_PERSONAL + API_BANK}/template/list/`,
	},
	user: {
		getUserProfile: `${API_BASE + API_PERSONAL}/client_info`,
		getCheckAccount: `${API_BASE + API_PERSONAL + API_BANK}/account/check`,
		getCheckAccountV2: `${API_BASE + API_PERSONAL + API_BANK}/account/check/v2`,
		getUserSpam: `${API_BASE + API_PERSONAL + API_BANK}/account/offer`,
		getStatement: `${API_BASE + API_PERSONAL + API_BANK}/account/statement`,
		getExtendedStatement: `${API_BASE + API_PERSONAL + API_BANK}/account/full_statement`,
	},
	cashback: {
		getSelectCategories: `${API_BASE + API_PERSONAL + API_BANK}/cashback/select`,
		postSelectCategories: `${API_BASE + API_PERSONAL + API_BANK}/cashback`,
		getCurrentCategories: `${API_BASE + API_PERSONAL + API_BANK}/cashback/current`,
		getCashbackAmount: `${API_BASE + API_PERSONAL + API_BANK}/cashback`,
		/** получаем токен к P2U */
		getPayToU: `${API_BASE + API_PERSONAL + API_BANK}/marketing/platform/pay2u`,
	},
} as const;
