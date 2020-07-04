import React, { useState, useContext } from 'react';
import axios from 'axios';

import SearchContext from '../context/search';

const SearchForm = () => {
	const [show, SET_SHOW] = useState('');
	const { dispatchSearch, dispatchError } = useContext(SearchContext);

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		dispatchError({ type: 'SET_ERROR', error: '' });
		try {
			const response = await axios({
				url: 'https://vue-tv-api.herokuapp.com/shows/search',
				method: 'post',
				data: { show },
			});
			dispatchSearch({ type: 'SET_SHOWS', shows: response.data });
		} catch (e) {
			dispatchError({ type: 'SET_ERROR', error: e.response.data.message });
		} finally {
			SET_SHOW('');
		}
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<input
				placeholder="Start a Search"
				onChange={(e) => SET_SHOW(e.target.value)}
				value={show}
			/>
			<button disabled={show === ''}>Search</button>
		</form>
	);
};

export default SearchForm;
