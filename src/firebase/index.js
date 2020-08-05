import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

const signInWithPopup = () => {
	const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(googleAuthProvider);
};

const onAuthStateChanged = (callback) => {
	firebase.auth().onAuthStateChanged(callback);
};

const signOut = () => {
	firebase.auth().signOut();
};

const currentUser = firebase.auth().currentUser;

export { currentUser, signOut, onAuthStateChanged, signInWithPopup, database };
