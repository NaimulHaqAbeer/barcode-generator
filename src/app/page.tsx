'use client';

import { data } from '@/lib/config/data';
import { ReactNode } from 'react';
import { useGetStoreQuery } from '@/store/services/storeApi';
import { Center, Text } from '@chakra-ui/react';

export default function Home() {
	// const { data: apiData, isLoading } = useGetStoreQuery({});

	return (
		<Center>
			<Text fontSize={{ base: '2rem', md: '3rem' }}>Hellow World</Text>
		</Center>
	);
}
