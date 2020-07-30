import React from 'react';

import { signInWithPopup } from '../firebase';

const LoginPage = () => (
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="box-layout__title">React TV App</h1>
			<p>Subscribe to your favorite shows</p>
			<button className="button" onClick={signInWithPopup}>
				Login with Google
			</button>
		</div>
	</div>
);

export default LoginPage;
