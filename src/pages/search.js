import React, { useReducer } from 'react';

import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';
import SearchContext from '../context/search';
import SearchReducer from '../reducers/search';
import ErrorReducer from '../reducers/error';

const SearchPage = () => {
	const [shows, dispatchSearch] = useReducer(SearchReducer, []);
	const [error, dispatchError] = useReducer(ErrorReducer, '');

	return (
		<div>
			<Layout>
				<SearchContext.Provider
					value={{ error, shows, dispatchSearch, dispatchError }}
				>
					<SearchForm />
					<SearchList />
				</SearchContext.Provider>
			</Layout>
		</div>
	);
};

export default SearchPage;
