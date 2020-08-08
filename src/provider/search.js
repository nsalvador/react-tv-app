import React, { useState } from 'react';

import SearchContext from '../context/search';

const SearchProvider = (props) => {
	const [shows, setShows] = useState([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);

	return (
		<SearchContext.Provider
			value={{ shows, setShows, error, setError, isLoading, setLoading }}
			{...props}
		/>
	);
};

export default SearchProvider;
