import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorButton } from '@/app/providers/ErrorBoundary';
import { BaseAuth } from '@/features/BaseAuth';
import { useGetUserQuery } from '@/entities/User';
import { fetchConfig } from '@/shared/api';
import { TRANSLATIONS_API } from '@/shared/const';
import { Button, HTag, HTagType, Input, Modal, P } from '@/shared/ui';

const MainPage = () => {
	const { t } = useTranslation(TRANSLATIONS_API.main.translate);

	// const {} = useGetUserQuery({ id: 'asdasdad' });
	useEffect(() => {
		fetchConfig
			.fetchBaseApi({ url: 'http://localhost:8000/', type: 'json' })
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<HTag tag={HTagType.H1}>{t(TRANSLATIONS_API.main.components.main)}</HTag>
			<ErrorButton />
			<Modal label={<Button>Логин</Button>} content={<BaseAuth />} />
		</div>
	);
};

export default MainPage;
