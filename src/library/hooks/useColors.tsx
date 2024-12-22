'use client';
import { useGetStoreQuery } from '@/store/services/storeApi';
import React from 'react';

export type ColorProps = {
	border: string;
	brand: string;
	brandText: string;
	primaryText: string;
};

const useColors = (): ColorProps => {
	const { data, isLoading } = useGetStoreQuery({});

	const [border, setBorder] = React.useState<string>('eborder.600');
	const [brand, setBrand] = React.useState<string>('#202020');
	const [brandText, setBrandText] = React.useState<string>('#fff');
	const [primaryText, setPrimaryText] = React.useState<string>('#202020');

	React.useEffect(() => {
		if (data) {
			setBrand(data?.basic?.brandColor);
			setBrandText(data?.basic?.brandTextColor);
			setPrimaryText(data?.basic?.primaryTextColor);

			setBorder(data?.basic?.borderColor || 'eborder.600');
		}
	}, [isLoading, data]);

	return {
		border,
		brand,
		brandText,
		primaryText,
	};
};

export default useColors;
