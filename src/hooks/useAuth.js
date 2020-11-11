import { auth } from '../firebase/config';

export const authSignUp = (email, password) => {
	return auth.createUserWithEmailAndPassword(email, password);
};

export const authLogout = () => {
	console.log('user logged out');
	auth.signOut();
};

export const authLogin = (email, password) => {
	return auth.signInWithEmailAndPassword(email, password);
};
