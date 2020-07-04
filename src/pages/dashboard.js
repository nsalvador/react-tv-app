import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import DashboardContext from '../context/dashboard';

const DashboardPage = () => {
	const { subscriptions } = useContext(DashboardContext);

	return (
		<div>
			<Layout>
				{subscriptions.length !== 0 ? (
					<ol>
						{subscriptions.map((show) => (
							<li key={show.id}>
								{show.seriesName}
								<button>-</button>
							</li>
						))}
					</ol>
				) : (
					<p>
						No Subscriptions. Start a <Link to="/search">Search</Link>
					</p>
				)}
			</Layout>
		</div>
	);
};

export default DashboardPage;
