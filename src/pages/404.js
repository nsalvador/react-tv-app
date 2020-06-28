import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/layout';

const NotFoundPage = () => (
	<div>
		<Layout>
			404 - <Link to="/dashboard">Go Home</Link>
		</Layout>
	</div>
);

export default NotFoundPage;
