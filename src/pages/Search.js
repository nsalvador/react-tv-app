import React from 'react';

import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';
import SearchProvider from '../provider/search';

const SearchPage = () => (
	<div>
		<Layout>
			<SearchProvider>
				<SearchForm />
				<SearchList />
			</SearchProvider>
		</Layout>
	</div>
);

export default SearchPage;
