import React, { useState, useReducer, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import database from '../firebase';
import subscriptionsReducer from '../reducers/subscriptions';
import DashboardContext from '../context/dashboard';
import DashboardPage from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage.js';
import PrivateRoute from '../routers/PrivateRoute';
import PublicRoute from '../routers/PublicRoute';
import SearchPage from '../pages/Search';
import { useAuthContext } from '../context/auth';

const AppRouter = () => {
	const [subscriptions, dispatch] = useReducer(subscriptionsReducer, []);
	const [loading, SET_LOADING] = useState(false);
	const { user } = useAuthContext();

	useEffect(() => {
		const { uid } = user;
		if (uid) {
			SET_LOADING(true);
			database
				.ref(`users/${uid}/shows`)
				.once(`value`)
				.then((dataSnapshot) => {
					const subscriptions = [];
					dataSnapshot.forEach((childSnapshot) => {
						subscriptions.push({
							id: childSnapshot.key,
							...childSnapshot.val(),
						});
					});
					SET_LOADING(false);
					dispatch({ type: 'POPULATE_SUBSCRIPTIONS', subscriptions });
				});
		}
	}, [user]);

	return (
		<DashboardContext.Provider value={{ subscriptions, dispatch, loading }}>
			<BrowserRouter>
				<Switch>
					<PublicRoute path="/" component={LoginPage} exact={true} />
					<PrivateRoute path="/dashboard" component={DashboardPage} />
					<PrivateRoute path="/search" component={SearchPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</BrowserRouter>
		</DashboardContext.Provider>
	);
};

export default AppRouter;
