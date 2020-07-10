import React from 'react';

import { useDashboardContext } from '../context/dashboard';
import { useSearchContext } from '../context/search';

const SearchList = () => {
	const { error, shows } = useSearchContext();
	const { dispatch } = useDashboardContext();

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
