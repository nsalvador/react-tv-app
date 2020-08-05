import React from 'react';

import { database } from '../firebase';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';
import SearchProvider from '../provider/search';
import { useAuthContext } from '../context/auth';
import { useDashboardContext } from '../context/dashboard';

const SearchPage = ({ history }) => {
	const { subscriptions, dispatch } = useDashboardContext();
	const { user } = useAuthContext();

	const addShow = async (show) => {
		const { uid } = user;
		const { id } = show;
		if (!subscriptions.some((item) => item.id === id)) {
			await database.ref(`users/${uid}/shows`).child(`${id}`).set(show);
			dispatch({ type: 'ADD_SHOW', show });
			history.push('/dashboard');
		}
	};

	return (
		<div>
			<Layout>
				<SearchProvider>
					<SearchForm />
					<SearchList addShow={addShow} />
				</SearchProvider>
			</Layout>
		</div>
	);
};

export default SearchPage;
