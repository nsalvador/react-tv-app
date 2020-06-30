import React from 'react';

const SearchList = ({ shows, error }) => {
	return (
		<div>
			{error ? (
				<p>{error.message}</p>
			) : (
				<ol>
					{shows.map((show) => (
						<li key={show.id}>{show.seriesName}</li>
					))}
				</ol>
			)}
		</div>
	);
};

export default SearchList;
