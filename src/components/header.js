import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<h1>React TV App</h1>
		<ul>
			<li>
				<NavLink to="/dashboard" activeClassName="is-active">
					Dashboard
				</NavLink>
			</li>
			<li>
				<NavLink to="/search" activeClassName="is-active">
					Search
				</NavLink>
			</li>
		</ul>
	</header>
);

export default Header;
