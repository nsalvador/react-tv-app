import React from 'react';
import { Link } from 'react-router-dom';
import { useDashboardContext } from '../context/dashboard';

const DashboardPageHeader = () => {
	const { subscriptions } = useDashboardContext();
	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">
					Dashboard
					{subscriptions.length !== 0 &&
						(subscriptions.length > 1 ? (
							<span>: {subscriptions.length} subscriptions</span>
						) : (
							<span>: {subscriptions.length} subscription</span>
						))}
				</h1>
				<div className="page-header__actions">
					<Link className="button" to="/search">
						Goto Search Page
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DashboardPageHeader;
