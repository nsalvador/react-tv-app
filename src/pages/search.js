import React, { useState } from 'react';
import axios from 'axios';

import Layout from '../components/layout';

const SearchPage = () => {
	const [show, setShow] = useState('');
	const [shows, setShows] = useState([]);

	const onSubmit = async (e) => {
		e.preventDefault();
		const response = await axios({
			url: 'https://vue-tv-api.herokuapp.com/shows/search',
			method: 'post',
			data: { show },
		});
		setShows([...response.data]);
		setShow('');
	};

	const onChange = (e) => setShow(e.target.value);

	return (
		<div>
			<Layout>
				<form onSubmit={onSubmit}>
					<input
						placeholder="Start a Search"
						value={show}
						onChange={onChange}
					/>
					<button disabled={show === ''}>Search</button>
				</form>
				<ol>
					{shows.map((show) => (
						<li key={show.id}>{show.seriesName}</li>
					))}
				</ol>
			</Layout>
		</div>
	);
};

export default SearchPage;
