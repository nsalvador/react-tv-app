import React from 'react';

import Layout from '../components/Layout';
import DashboardPageHeader from '../components/DashboardPageHeader';
import DashboardPageContents from '../components/DashboardPageContents';

const DashboardPage = () => {
	return (
		<Layout>
			<DashboardPageHeader />
			<DashboardPageContents />
		</Layout>
	);
};

export default DashboardPage;
