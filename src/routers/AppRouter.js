import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashboardPage from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage.js';
import PrivateRoute from '../routers/PrivateRoute';
import PublicRoute from '../routers/PublicRoute';
import SearchPage from '../pages/Search';

const AppRouter = () => (
	<BrowserRouter>
		<Switch>
			<PublicRoute path="/" component={LoginPage} exact={true} />
			<PrivateRoute path="/dashboard" component={DashboardPage} />
			<PrivateRoute path="/search" component={SearchPage} />
			<Route component={NotFoundPage} />
		</Switch>
	</BrowserRouter>
);

export default AppRouter;
