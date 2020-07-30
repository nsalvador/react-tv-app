import React, { useState } from 'react';
import axios from 'axios';

import { useSearchContext } from '../context/search';

const SearchForm = () => {
	const [show, SET_SHOW] = useState('');
	const { shows, SET_SHOWS, SET_ERROR, SET_LOADING } = useSearchContext();

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		SET_LOADING(true);
		SET_ERROR('');
		try {
			const response = await axios({
				url: 'https://vue-tv-api.herokuapp.com/shows/search',
				method: 'post',
				data: { show },
			});
			SET_SHOWS(response.data);
			SET_LOADING(false);
		} catch (e) {
			SET_ERROR(e.response.data.message);
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
