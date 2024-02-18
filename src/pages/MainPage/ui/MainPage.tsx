import React from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorButton } from '@/app/providers/ErrorBoundary';
import { BaseAuth } from '@/features/BaseAuth';
import { TRANSLATIONS_API } from '@/shared/const';
import { Button, EHTag, HTag, Modal, P } from '@/shared/ui';

const MainPage = () => {
	const { t } = useTranslation(TRANSLATIONS_API.main.translate);

	return (
		<div>
			<HTag tag={EHTag.H1}>{t(TRANSLATIONS_API.main.components.main)}</HTag>
			<ErrorButton />
			<Modal label={<Button>{t('login')}</Button>}>
				<BaseAuth />
			</Modal>
		</div>
	);
};

export default MainPage;
