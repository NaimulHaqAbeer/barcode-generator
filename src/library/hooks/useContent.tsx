'use client';

import { useGetStoreQuery } from '@/store/services/storeApi';
import React from 'react';

type HeaderConfigProps = {
	bgColor: string; //
	fgColor: string; //
	borderColor: string; //
	searchBoxBg: string; //
	searchBoxFg: string; //
	searchBoxIcon: string;
	iconBg: string; //
	iconFg: string; //
	tagBg: string; //
	tagFg: string; //
	logo?: string; //
	searchBoxText: string; //
	searchBoxTextColor: string; //
	searchBoxRadius: string; //
	iconRadius: string; //
};

type Content = {
	content: any;
	basic: any;
	data: any;
};

const headerPreConfig: HeaderConfigProps = {
	bgColor: '#fff',
	fgColor: '#000',
	borderColor: '#000',
	searchBoxBg: '#fff',
	searchBoxFg: '#000',
	searchBoxIcon: '#000',
	iconBg: '#000',
	iconFg: '#fff',
	tagBg: '#000',
	tagFg: '#fff',
	searchBoxText: 'Search',
	searchBoxTextColor: '#000',
	searchBoxRadius: '999',
	iconRadius: '999',
};

const useContent = (): Content => {
	const { data, isLoading } = useGetStoreQuery({});

	const [formData, setFormData] = React.useState({
		content: {
			header: headerPreConfig,
		},
		basic: {},
	});

	React.useEffect(() => {
		if (data) {
			setFormData(data);
		}
	}, [isLoading, data]);

	return {
		content: formData?.content,
		basic: formData?.basic,
		data: formData,
	};
};

export default useContent;
