import React, { useState } from 'react';
import axios from 'axios';

import { useSearchContext } from '../context/search';

const SearchPageHeader = () => {
	const [show, setShow] = useState('');
	const { shows, setShows, setError, setLoading } = useSearchContext();

	const onSubmitHandler = async (event) => {
		event.preventDefault();
		setLoading(true);
		setError('');
		try {
			const response = await axios({
				url: 'https://vue-tv-api.herokuapp.com/shows/search',
				method: 'post',
				data: { show },
			});
			setShows(response.data);
		} catch (error) {
			setError(error.response.data.message);
		} finally {
			setLoading(false);
			setShow('');
		}
	};

	return (
		<div className="page-header">
			<div className="content-container">
				<form onSubmit={onSubmitHandler}>
					<input
						className="text-input"
						placeholder="Enter Show"
						value={show}
						onChange={(e) => setShow(e.target.value)}
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

export default SearchPageHeader;
