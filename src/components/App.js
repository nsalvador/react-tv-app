import React from 'react';

import AppRouter from '../routers/AppRouter';
import useAuth from '../functions/auth';
import AuthProvider from '../provider/auth';
import LoadingPage from '../pages/LoadingPage';
import DashboardProvider from '../provider/dashboard';

const App = () => {
	const { initializing } = useAuth();

	if (initializing) {
		return <LoadingPage />;
	}

	return (
		<AuthProvider>
			<DashboardProvider>
				<AppRouter />
			</DashboardProvider>
		</AuthProvider>
	);
};

export default App;
