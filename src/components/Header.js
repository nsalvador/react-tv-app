import React from 'react';
import { Link } from 'react-router-dom';

import { signOut } from '../firebase';

const Header = () => {
	return (
		<header className="header">
			<div className="content-container">
				<div className="header__content">
					<Link className="header__title" to="/dashboard">
						<h1>React TV Search</h1>
					</Link>
					<button className="button button--link" onClick={signOut}>
						Logout
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
