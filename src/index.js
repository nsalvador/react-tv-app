import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

const DashboardPage = () => <div>This is from my dashboard component</div>;

const SearchPage = () => <div>This is from my search component</div>;

const routes = (
	<BrowserRouter>
		<>
			<Route path="/" component={DashboardPage} exact={true} />
			<Route path="/search" component={SearchPage} />
		</>
	</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
