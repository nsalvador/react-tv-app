import React from 'react';

import { database } from '../firebase';
import useDashboard from '../functions/dashboard';
import DashboardContext from '../context/dashboard';
import { useAuthContext } from '../context/auth';

const DashboardProvider = (props) => {
	const { user } = useAuthContext();
	const { subscriptions, dispatch, loading: isLoading } = useDashboard(
		user?.uid
	);

	const remove = (show) => {
		const { uid } = user;
		const { id } = show;
		database
			.ref(`users/${uid}/shows/${id}`)
			.remove()
			.then(() => dispatch({ type: 'REMOVE_SHOW', id }));
	};

	const add = (show) => {
		const { uid } = user;
		const { id } = show;
		if (!subscriptions.some((item) => item.id === id)) {
			database
				.ref(`users/${uid}/shows`)
				.child(`${id}`)
				.set(show)
				.then(() => dispatch({ type: 'ADD_SHOW', show }));
		}
	};

	return (
		<DashboardContext.Provider
			value={{ subscriptions, dispatch, isLoading, remove, add }}
			{...props}
		/>
	);
};

export default DashboardProvider;
