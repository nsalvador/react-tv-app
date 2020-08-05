import React from 'react';
import { Link } from 'react-router-dom';

import { database } from '../firebase';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import ShowList from '../components/ShowList';
import { useDashboardContext } from '../context/dashboard';
import { useAuthContext } from '../context/auth';

const DashboardPage = () => {
	const { subscriptions, dispatch, isLoading } = useDashboardContext();
	const { user } = useAuthContext();

	const removeShow = (show) => {
		const { id } = show;
		const { uid } = user;
		return database
			.ref(`users/${uid}/shows/${id}`)
			.remove()
			.then(() => dispatch({ type: 'REMOVE_SHOW', id }));
	};

	return (
		<Layout>
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
			<div className="content-container">
				{isLoading ? (
					<Loading />
				) : (
					<div>
						{subscriptions.length !== 0 ? (
							<ShowList
								shows={subscriptions}
								removeShow={removeShow}
								action="REMOVE_SHOW"
							>
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
		</Layout>
	);
};

export default DashboardPage;
