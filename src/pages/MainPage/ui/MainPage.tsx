import React from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorButton } from '@/app/providers/ErrorBoundary';
import { BaseAuth } from '@/features/BaseAuth';
import { TRANSLATIONS_API } from '@/shared/const';
import { Button, HTag, HTagType, Input, Modal, P } from '@/shared/ui';

const MainPage = () => {
	const { t } = useTranslation(TRANSLATIONS_API.main.translate);

	return (
		<div>
			<HTag tag={HTagType.H1}>{t(TRANSLATIONS_API.main.components.main)}</HTag>
			<ErrorButton />
			<Modal label={<Button>Логин</Button>} content={<BaseAuth />} />
		</div>
	);
};

export default MainPage;
