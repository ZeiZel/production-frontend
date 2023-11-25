import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TRANSLATIONS_API } from '@/shared/const';
import { Button } from '@/shared/ui';

export const ErrorButton = () => {
	const { t } = useTranslation(TRANSLATIONS_API.error.translate);

	const [error, setError] = useState<boolean>(false);

	const handleCastError = () => setError((prevState) => !prevState);

	useEffect(() => {
		if (error) {
			throw new Error(t(TRANSLATIONS_API.error.components.error_bug_message));
		}
	}, [error]);

	return (
		<Button onClick={handleCastError}>{t(TRANSLATIONS_API.error.components.error_bug)}</Button>
	);
};
