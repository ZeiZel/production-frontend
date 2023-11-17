import React from 'react';
import styles from './ErrorPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, HTag, HTagType } from '@/shared/ui';
import { TRANSLATIONS_API } from '@/shared/const';

export const ErrorPage = () => {
	const { t } = useTranslation(TRANSLATIONS_API.error.translate);

	const handleReloadPage = () => {
		location.reload();
	};

	return (
		<div className={styles.error}>
			<HTag tag={HTagType.H1}>{t(TRANSLATIONS_API.error.components.error_page_title)}</HTag>
			<Button onClick={handleReloadPage}>
				{t(TRANSLATIONS_API.error.components.error_page_button)}
			</Button>
		</div>
	);
};
