import React from 'react';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';
import ShowList from '../components/ShowList';
import { useDashboardContext } from '../context/dashboard';

const DashboardPageContents = () => {
	const { isLoading, subscriptions } = useDashboardContext();

	if (isLoading) {
		return (
			<div className="content-container">
				<Loading />
			</div>
		);
	}

	if (subscriptions.length !== 0) {
		return (
			<div className="content-container">
				<ShowList shows={subscriptions} action="REMOVE_SHOW">
					<span>REMOVE</span>
				</ShowList>
			</div>
		);
	}

	return (
		<div className="content-container">
			<p>
				No Subscriptions. Start a <Link to="/search">Search</Link>
			</p>
		</div>
	);
};

export default DashboardPageContents;
