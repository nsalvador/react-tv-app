import React from 'react';
import { Link } from 'react-router-dom';

import { database } from '../firebase';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import ShowList from '../components/ShowList';
import { useDashboardContext } from '../context/dashboard';
import { useAuthContext } from '../context/auth';
import DashboardPageHeader from '../components/DashboardPageHeader';

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
			<DashboardPageHeader />
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
