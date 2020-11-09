import { useState, useEffect } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

export const useFirestore = (collection, order) => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const unsub = projectFirestore
			.collection(collection)
			.orderBy(order, 'desc')
			.onSnapshot((snap) => {
				let documents = [];
				snap.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id });
				});
				setDocs(documents);
            });
            return () => unsub();
	}, [collection, order]);

	return { docs };
};

export const postFirestoreEvent = (collection, obj) => {
	projectFirestore.collection(collection).add({
		...obj, 
		joiners: 0,
		next: true,
		createdAt: timestamp()
	}).then(() => {
		console.log('event submitted!');
	}).catch(err => {
		console.log(err.message);
	});
}