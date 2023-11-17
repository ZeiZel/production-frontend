import React from 'react';
import { useTranslation } from 'react-i18next';
import { TRANSLATIONS_API } from '@/shared/const';

const AboutPage = () => {
	const { t } = useTranslation(TRANSLATIONS_API.about.translate);

	return (
		<div>
			<div className={'about'}>{t(TRANSLATIONS_API.about.components.about)}</div>
		</div>
	);
};

export default AboutPage;
