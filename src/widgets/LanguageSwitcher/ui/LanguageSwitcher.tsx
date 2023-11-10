import React, { FC, ReactElement } from 'react';
import styles from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: FC = (): ReactElement => {
    const { t, i18n } = useTranslation();

	const handleToggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<div className={styles.button}>
			<button onClick={handleToggleLanguage}>{t('translate_button')}</button>
		</div>
	);
};
