import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: 'AIzaSyByp2Ia_2PYXZ_t2Q92NturPbnwhGdy9LQ',
	authDomain: 'tokyo-frenchies.firebaseapp.com',
	databaseURL: 'https://tokyo-frenchies.firebaseio.com',
	projectId: 'tokyo-frenchies',
	storageBucket: 'tokyo-frenchies.appspot.com',
	messagingSenderId: '429014876993',
	appId: '1:429014876993:web:70c0cccd50e427e12997c0',
	measurementId: 'G-KCQRLVB5XC',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const auth = firebase.auth();

export { projectStorage, projectFirestore, auth };