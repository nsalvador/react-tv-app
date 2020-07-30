import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuthContext } from '../context/auth';

const PublicRoute = ({ component: Component, ...rest }) => {
	const { user } = useAuthContext();

	return (
		<Route
			{...rest}
			component={(props) =>
				!!user.uid ? <Redirect to="/dashboard" /> : <Component {...props} />
			}
		/>
	);
};

export default PublicRoute;
