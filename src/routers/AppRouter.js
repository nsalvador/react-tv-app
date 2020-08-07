import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashboardContext from '../context/dashboard';
import DashboardPage from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage.js';
import PrivateRoute from '../routers/PrivateRoute';
import PublicRoute from '../routers/PublicRoute';
import SearchPage from '../pages/Search';
import { useAuthContext } from '../context/auth';
import useDashboard from '../functions/dashboard';

const AppRouter = () => {
	const { user } = useAuthContext();
	const { subscriptions, dispatch, loading: isLoading } = useDashboard(
		user?.uid
	);

	return (
		<DashboardContext.Provider value={{ subscriptions, dispatch, isLoading }}>
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
