'use client';

import { useGetStoreQuery } from '@/store/services/storeApi';
import React from 'react';

export type FontProps = {
	primaryFont: string;
	secondaryFont: string;
};

const useFont = (): FontProps => {
	const { data, isLoading } = useGetStoreQuery({});

	//fonts
	const [primaryFont, setPrimaryFont] = React.useState<string>('Marcellus');
	const [secondaryFont, setSecondaryFont] = React.useState<string>('Inter');

	React.useEffect(() => {
		if (data) {
			setPrimaryFont(data?.basic?.primaryFont || 'Playfair Display');
			setSecondaryFont(data?.basic?.secondaryFont || 'Inter');
		}
	}, [isLoading, data]);

	return {
		primaryFont,
		secondaryFont,
	};
};

export default useFont;
