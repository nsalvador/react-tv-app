import React, { useContext } from 'react';
import SearchContext from '../context/search';
import DashboardContext from '../context/dashboard';

const SearchList = () => {
	const { error, shows } = useContext(SearchContext);
	const { dispatch } = useContext(DashboardContext);

	return (
		<div>
			{error ? (
				<p>{error}</p>
			) : (
				<ol>
					{shows.map((show) => (
						<li key={show.id}>
							{show.seriesName}
							<button onClick={() => dispatch({ type: 'ADD_SHOW', show })}>
								+
							</button>
						</li>
					))}
				</ol>
			)}
		</div>
	);
};

export default SearchList;
