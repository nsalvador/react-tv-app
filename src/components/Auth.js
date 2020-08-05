import { useState, useEffect } from 'react';

import { currentUser, onAuthStateChanged } from '../firebase';

const Auth = () => {
	const [state, setState] = useState(() => {
		const user = currentUser;
		return {
			initializing: !user,
			user,
		};
	});

	useEffect(() => {
		const unsubscribe = onAuthStateChanged((user) =>
			setState({ initializing: false, user })
		);
		return () => unsubscribe();
	}, []);

	return state;
};

export default Auth;
