import React from 'react';
import { useTranslation } from 'react-i18next';
import { TRANSLATIONS_API } from '@/shared/const';
import { Button, EHTag, HTag } from '@/shared/ui';
import styles from './ErrorPage.module.scss';

export const ErrorPage = () => {
	const { t } = useTranslation(TRANSLATIONS_API.error.translate);

	const handleReloadPage = () => {
		location.reload();
	};

	return (
		<div className={styles.error}>
			<HTag tag={EHTag.H1}>{t(TRANSLATIONS_API.error.components.error_page_title)}</HTag>
			<Button onClick={handleReloadPage}>
				{t(TRANSLATIONS_API.error.components.error_page_button)}
			</Button>
		</div>
	);
};
