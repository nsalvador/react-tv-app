import React from 'react';

import { useSearchContext } from '../context/search';
import ShowList from '../components/ShowList';
import Loading from '../components/Loading';

const SearchList = ({ addShow }) => {
	const { error, shows, isLoading } = useSearchContext();

	return (
		<div className="content-container">
			{error ? (
				<p>{error}</p>
			) : (
				<div>
					{isLoading ? (
						<Loading />
					) : (
						<ShowList shows={shows} addShow={addShow} action="ADD_SHOW">
							<span>ADD</span>
						</ShowList>
					)}
				</div>
			)}
		</div>
	);
};

export default SearchList;
