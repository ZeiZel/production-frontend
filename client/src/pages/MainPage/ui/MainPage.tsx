import React from 'react';
import { useTranslation } from 'react-i18next';
import { TRANSLATIONS_API } from '@/shared/const';
import { HTag, HTagType } from '@/shared/ui';
import { ErrorButton } from '@/app/providers/ErrorBoundary';

const MainPage = () => {
	const { t } = useTranslation(TRANSLATIONS_API.main.translate);

	return (
		<div>
			<HTag tag={HTagType.H1}>{t(TRANSLATIONS_API.main.components.main)}</HTag>
			<ErrorButton />
		</div>
	);
};

export default MainPage;
