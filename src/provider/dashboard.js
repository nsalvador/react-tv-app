import React from 'react';

import DashboardContext from '../context/dashboard';
import { useAuthContext } from '../context/auth';
import useDashboard from '../functions/dashboard';

const DashboardProvider = (props) => {
	const { user } = useAuthContext();
	const { subscriptions, dispatch, loading: isLoading } = useDashboard(
		user?.uid
	);
	return (
		<DashboardContext.Provider
			value={{ subscriptions, dispatch, isLoading }}
			{...props}
		/>
	);
};

export default DashboardProvider;
