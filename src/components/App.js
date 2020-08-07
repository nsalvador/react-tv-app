import React from 'react';

import AppRouter from '../routers/AppRouter';
import useAuth from '../functions/auth';
import AuthProvider from '../provider/auth';
import LoadingPage from '../pages/LoadingPage';

const App = () => {
	const { initializing } = useAuth();

	if (initializing) {
		return <LoadingPage />;
	}

	return (
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	);
};

export default App;
