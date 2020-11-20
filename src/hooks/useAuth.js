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

export const AuthUser = () => {
	return auth.currentUser;
};

export const AuthAvatar = (url) => {
	const user = auth.currentUser;
	user.updateProfile({
		photoURL: url
	}).then(() => console.log('updated')).catch(err => console.log(err))
}