import React from 'react';

import AuthContext from '../context/auth';
import useAuth from '../components/Auth';

const AuthProvider = (props) => {
	const { user } = useAuth();
	return <AuthContext.Provider value={{ user }} {...props} />;
};

export default AuthProvider;
