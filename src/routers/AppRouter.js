import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage.js';
import PrivateRoute from '../routers/PrivateRoute';
import PublicRoute from '../routers/PublicRoute';
import SearchPage from '../pages/SearchPage';

const AppRouter = () => (
	<Router>
		<Switch>
			<PublicRoute path="/" component={LoginPage} exact={true} />
			<PrivateRoute path="/dashboard" component={DashboardPage} exact={true} />
			<PrivateRoute path="/search" component={SearchPage} exact={true} />
			<Route component={NotFoundPage} />
		</Switch>
	</Router>
);

export default AppRouter;
