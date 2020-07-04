import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashboardPage from '../pages/dashboard';
import SearchPage from '../pages/search';
import NotFoundPage from '../pages/404.js';
import DashboardContext from '../context/dashboard';
import subscriptionsReducer from '../reducers/subscriptions';

const AppRouter = () => {
	const [subscriptions, dispatch] = useReducer(subscriptionsReducer, []);

	useEffect(() => {
		const subscriptions = JSON.parse(localStorage.getItem('subscriptions'));
		if (subscriptions) {
			dispatch({ type: 'POPULATE_SUBSCRIPTIONS', subscriptions });
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
	}, [subscriptions]);

	return (
		<DashboardContext.Provider value={{ subscriptions, dispatch }}>
			<BrowserRouter>
				<Switch>
					<Route path="/dashboard" component={DashboardPage} exact={true} />
					<Route path="/search" component={SearchPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</BrowserRouter>
		</DashboardContext.Provider>
	);
};

export default AppRouter;
