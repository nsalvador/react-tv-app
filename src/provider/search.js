import React, { useState } from 'react';

import SearchContext from '../context/search';

const SearchProvider = (props) => {
	const [shows, SET_SHOWS] = useState([]);
	const [error, SET_ERROR] = useState('');
	const [isLoading, SET_LOADING] = useState(false);
	const value = { shows, SET_SHOWS, error, SET_ERROR, isLoading, SET_LOADING };

	return <SearchContext.Provider value={value} {...props} />;
};

export default SearchProvider;
