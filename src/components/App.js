import React, { useState, useEffect } from 'react';

import AppRouter from '../routers/AppRouter';
import AuthContext from '../context/auth';
import LoadingPage from '../pages/LoadingPage';
import { onAuthStateChanged } from '../firebase';

const App = () => {
	const [user, SET_USER] = useState({ uid: null });
	const [isLoading, SET_LOADING] = useState(false);

	useEffect(() => {
		SET_LOADING(true);
		onAuthStateChanged((user) => {
			user ? SET_USER({ uid: user.uid }) : SET_USER({ uid: null });
			SET_LOADING(false);
		});
	}, []);

	return (
		<div>
			{isLoading ? (
				<LoadingPage />
			) : (
				<AuthContext.Provider value={{ user }}>
					<AppRouter />
				</AuthContext.Provider>
			)}
		</div>
	);
};

export default App;
