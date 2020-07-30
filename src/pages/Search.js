import React, { useState } from 'react';

import database from '../firebase';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';
import SearchContext from '../context/search';
import { useAuthContext } from '../context/auth';
import { useDashboardContext } from '../context/dashboard';

const SearchPage = ({ history }) => {
	const [shows, SET_SHOWS] = useState([]);
	const [error, SET_ERROR] = useState('');
	const [isLoading, SET_LOADING] = useState(false);

	const { subscriptions, dispatch } = useDashboardContext();
	const { user } = useAuthContext();

	const addShow = (show) => {
		const { uid } = user;
		const id = show.id;
		if (!subscriptions.some((item) => item.id === id)) {
			return database
				.ref(`users/${uid}/shows`)
				.child(`${id}`)
				.set(show)
				.then(() => {
					dispatch({ type: 'ADD_SHOW', show });
					history.push('/dashboard');
				});
		}
	};

	return (
		<div>
			<Layout>
				<SearchContext.Provider
					value={{ error, shows, isLoading, SET_SHOWS, SET_ERROR, SET_LOADING }}
				>
					<SearchForm />
					<SearchList addShow={addShow} />
				</SearchContext.Provider>
			</Layout>
		</div>
	);
};

export default SearchPage;
