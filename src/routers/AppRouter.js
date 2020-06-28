import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashboardPage from '../pages/dashboard';
import SearchPage from '../pages/search';
import NotFoundPage from '../pages/404.js';

const AppRouter = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/dashboard" component={DashboardPage} exact={true} />
			<Route path="/search" component={SearchPage} />
			<Route component={NotFoundPage} />
		</Switch>
	</BrowserRouter>
);

export default AppRouter;
