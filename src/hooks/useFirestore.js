import firebase from 'firebase/app';
import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

export const useFirestore = (collection, order) => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const unsub = projectFirestore
			.collection(collection)
			.orderBy(order, 'desc')
			.onSnapshot(snap => {
				let documents = [];
				snap.forEach(doc => {
					documents.push({ ...doc.data(), id: doc.id });
				});
				setDocs(documents);
			});
		return () => unsub();
	}, [collection, order]);

	return { docs };
};

export const postFirestore = (collection, obj) => {
	projectFirestore
		.collection(collection)
		.add({
			...obj,
			createdAt: new Date(),
		})
		.then(() => {
			console.log('submitted to firestore!');
		})
		.catch(err => {
			console.log(err.message);
		});
};

// create user document in firestore
export const dbSignUp = newUser => {
	projectFirestore.collection('users').doc(newUser.uid).set({
		email: newUser.email,
		firstName: newUser.firstName,
		lastName: newUser.lastName,
		frenchieName: newUser.frenchieName,
		likedPhotos: [],
		eventsJoined: [],
	});
};

// get user information from firestore
export const GetUserInfo = user => {
	const [userInfo, setUserInfo] = useState([]);

	useEffect(() => {
		if (user) {
			const unsub = projectFirestore
				.collection('users')
				.doc(user)
				.onSnapshot(doc => {
					setUserInfo({ ...doc.data() });
				});
			return () => unsub();
		}
	}, [user]);
	return userInfo;
};

export const joinEvent = (user, eventId) => {
	if (user) {
		projectFirestore
			.collection('users')
			.doc(user)
			.update({
				eventsJoined: firebase.firestore.FieldValue.arrayUnion(eventId),
			})
			.then(() => console.log(`${user} joined event ${eventId}`))
			.catch(err => console.log(err));

		projectFirestore
			.collection('events')
			.doc(eventId)
			.update({
				joiners: firebase.firestore.FieldValue.increment(1),
			});
	}
};
