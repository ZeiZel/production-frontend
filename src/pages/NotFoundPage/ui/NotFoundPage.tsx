import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
	const { t } = useTranslation('not_found');

	return <div>{t('not_found')}</div>;
};

export default NotFoundPage;
