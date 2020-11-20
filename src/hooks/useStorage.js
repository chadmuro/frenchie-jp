import { useState, useEffect } from 'react';
import { storage, db } from '../firebase/config';

const useStorage = file => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		const storageRef = storage.ref(file.name);
		const collectionRef = db.collection('images');

		storageRef.put(file).on(
			'state_changed',
			snap => {
				let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(percentage);
			},
			err => {
				setError(err);
			},
			async () => {
				const url = await storageRef.getDownloadURL();
				const createdAt = new Date();
				collectionRef.add({ url, createdAt, name: file.name, likes: 0 });
				setUrl(url);
			}
		);
	}, [file]);

	return { url, error, progress };
};

export default useStorage;

export const AvatarStorage = file => {
	let storageRef = storage.ref(file.name);
	storageRef
		.put(file)
		.then(snapshot => {
			console.log(snapshot);
		})
};

export const GetAvatarUrl = file => {
	const [url, setUrl] = useState(null);
	let storageRef = storage.ref(file.name);
	storageRef.getDownloadURL(durl => {
		setUrl(durl)
	});
	return { url };
}
