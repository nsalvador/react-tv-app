import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuthContext } from '../context/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { user } = useAuthContext();

	return (
		<Route
			{...rest}
			component={(props) =>
				!!user.uid ? <Component {...props} /> : <Redirect to="/" />
			}
		/>
	);
};

export default PrivateRoute;
