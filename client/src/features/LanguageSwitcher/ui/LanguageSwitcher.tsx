import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: FC = (): ReactElement => {
	const { t, i18n } = useTranslation();

	const handleToggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return <button onClick={handleToggleLanguage}>{t('translate_button')}</button>;
};
