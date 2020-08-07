import { useState, useEffect, useReducer } from 'react';
import { database } from '../firebase';
import subscriptionsReducer from '../reducers/subscriptions';

const useDashboard = (id) => {
	const [subscriptions, dispatch] = useReducer(subscriptionsReducer, []);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		setLoading(true);
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
				dispatch({ type: 'POPULATE_SUBSCRIPTIONS', subscriptions });
			})
			.catch((err) => setError(err));
	}, [id]);

	return { error, loading, subscriptions, dispatch };
};

export default useDashboard;
