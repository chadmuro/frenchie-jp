import { auth } from '../firebase/config';

export const authSignUp = (email, password) => {
	return auth.createUserWithEmailAndPassword(email, password);
};

export const authLogout = () => {
	auth.signOut();
};

export const authLogin = (email, password) => {
	return auth.signInWithEmailAndPassword(email, password);
};
