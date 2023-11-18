enum ETranslationFiles {
	MAIN = 'main',
	ABOUT = 'about',
	LOGIN = 'login',
	ERROR = 'error',
	NOT_FOUND = 'not_found',
}

export const TRANSLATIONS_API: Record<
	ETranslationFiles,
	{ translate: string; components: { [key: string]: string } }
> = {
	[ETranslationFiles.MAIN]: {
		translate: 'main',
		components: {
			main: 'Main',
		},
	},
	[ETranslationFiles.ABOUT]: {
		translate: 'about',
		components: {
			about: 'About',
		},
	},
	[ETranslationFiles.LOGIN]: {
		translate: 'login',
		components: {
			login: 'login',
		},
	},
	[ETranslationFiles.ERROR]: {
		translate: 'error',
		components: {
			error_page_title: 'error_page_title',
			error_page_button: 'error_page_button',
			error_bug: 'error_bug',
			error_bug_message: 'error_bug_message',
		},
	},
	[ETranslationFiles.NOT_FOUND]: {
		translate: 'not_found',
		components: {},
	},
} as const;
