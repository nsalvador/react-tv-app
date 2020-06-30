import React, { useState } from 'react';

import Layout from '../components/layout';
import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';

const SearchPage = () => {
	const [shows, setShows] = useState([]);
	const [error, setError] = useState(null);

	const showsHandler = (shows) => {
		setShows(shows);
	};

	const errorHandler = (error) => {
		setError(error);
	};

	return (
		<div>
			<Layout>
				<SearchForm shows={showsHandler} error={errorHandler} />
				<SearchList shows={shows} error={error} />
			</Layout>
		</div>
	);
};

export default SearchPage;
