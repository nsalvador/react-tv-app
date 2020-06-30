import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ shows, error }) => {
	const [show, setShow] = useState('');

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			const response = await axios({
				url: 'https://vue-tv-api.herokuapp.com/shows/search',
				method: 'post',
				data: { show },
			});
			shows(response.data);
		} catch (e) {
			error({ ...e.response.data });
		} finally {
			setShow('');
		}
	};

	const onChangeHandler = (e) => {
		setShow(e.target.value);
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<input
				placeholder="Start a Search"
				onChange={onChangeHandler}
				value={show}
			/>
			<button disabled={show === ''}>Search</button>
		</form>
	);
};

export default SearchForm;
