import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
	<div className="layout-container">
		<div className="layout-content">
			<Header />
			{children}
		</div>
		<Footer />
	</div>
);

export default Layout;
