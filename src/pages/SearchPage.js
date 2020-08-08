import React from 'react';

import Layout from '../components/Layout';
import SearchPageHeader from '../components/SearchPageHeader';
import SearchPageContents from '../components/SearchPageContents';
import SearchProvider from '../provider/search';

const SearchPage = () => (
	<div>
		<Layout>
			<SearchProvider>
				<SearchPageHeader />
				<SearchPageContents />
			</SearchProvider>
		</Layout>
	</div>
);

export default SearchPage;
