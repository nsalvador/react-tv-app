import React from 'react';

import { useSearchContext } from '../context/search';
import ShowList from './ShowList';
import Loading from './Loading';

const SearchPageContents = () => {
	const { error, shows, isLoading } = useSearchContext();

	if (error) {
		return (
			<div className="content-container">
				<p>{error}</p>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className="content-container">
				<Loading />
			</div>
		);
	}

	return (
		<div className="content-container">
			<ShowList shows={shows} action="ADD_SHOW">
				<span>ADD</span>
			</ShowList>
		</div>
	);
};

export default SearchPageContents;
