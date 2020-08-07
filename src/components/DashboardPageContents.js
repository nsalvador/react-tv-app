import React from 'react';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';
import ShowList from '../components/ShowList';
import { useDashboardContext } from '../context/dashboard';

const DashboardPageContents = () => {
	const { isLoading, subscriptions } = useDashboardContext();

	return (
		<div className="content-container">
			{isLoading ? (
				<Loading />
			) : (
				<div>
					{subscriptions.length !== 0 ? (
						<ShowList shows={subscriptions} action="REMOVE_SHOW">
							<span>REMOVE</span>
						</ShowList>
					) : (
						<p>
							No Subscriptions. Start a <Link to="/search">Search</Link>
						</p>
					)}
				</div>
			)}
		</div>
	);
};

export default DashboardPageContents;
