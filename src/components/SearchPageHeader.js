import React, { useState } from 'react';
import axios from 'axios';

import { useSearchContext } from '../context/search';

const SearchForm = () => {
	const [show, SET_SHOW] = useState('');
	const { shows, setShows, setError, setLoading } = useSearchContext();

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError('');
		try {
			const response = await axios({
				url: 'https://vue-tv-api.herokuapp.com/shows/search',
				method: 'post',
				data: { show },
			});
			setShows(response.data);
			setLoading(false);
		} catch (e) {
			setError(e.response.data.message);
		} finally {
			SET_SHOW('');
		}
	};

	return (
		<div className="page-header">
			<div className="content-container">
				<form onSubmit={onSubmitHandler}>
					<input
						className="text-input"
						placeholder="Enter Show"
						onChange={(e) => SET_SHOW(e.target.value)}
						value={show}
					/>
					<div className="page-header__actions">
						<button className="button" disabled={show === ''}>
							Start Search
						</button>
						{shows.length !== 0 && <span>&nbsp;{shows.length} Results</span>}
					</div>
				</form>
			</div>
		</div>
	);
};

export default SearchForm;
