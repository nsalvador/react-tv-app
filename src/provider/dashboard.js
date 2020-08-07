import React from 'react';

import { database } from '../firebase';
import DashboardContext from '../context/dashboard';
import { useAuthContext } from '../context/auth';
import useDashboard from '../functions/dashboard';

const DashboardProvider = (props) => {
	const { user } = useAuthContext();
	const { subscriptions, dispatch, loading: isLoading } = useDashboard(
		user?.uid
	);

	const remove = (show) => {
		const { id } = show;
		const { uid } = user;
		return database
			.ref(`users/${uid}/shows/${id}`)
			.remove()
			.then(() => dispatch({ type: 'REMOVE_SHOW', id }));
	};

	return (
		<DashboardContext.Provider
			value={{ subscriptions, dispatch, isLoading, remove }}
			{...props}
		/>
	);
};

export default DashboardProvider;
