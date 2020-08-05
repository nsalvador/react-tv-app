import { useState, useEffect } from 'react';
import { database } from '../firebase';

const useDashboard = (id) => {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [subscriptions, setSubscriptions] = useState([]);

	useEffect(() => {
		database
			.ref(`users/${id}/shows`)
			.once(`value`)
			.then((dataSnapshot) => {
				const subscriptions = [];
				dataSnapshot.forEach((childSnapshot) => {
					subscriptions.push({
						id: childSnapshot.key,
						...childSnapshot.val(),
					});
				});
				setLoading(false);
				setSubscriptions(subscriptions);
			})
			.catch((err) => setError(err));
	}, [id]);

	return { error, loading, subscriptions, setSubscriptions };
};

export default useDashboard;
