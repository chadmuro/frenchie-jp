const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.userDeleted = functions.auth.user().onDelete(user => {
	const doc = admin.firestore().collection('users').doc(user.uid);
	return doc.delete();
});

const createNotification = notification => {
	return admin
		.firestore()
		.collection('notifications')
		.add(notification)
		.then(doc => {
			console.log('notification added', doc);
		});
};

exports.postCreated = functions.firestore
	.document('posts/{postId}')
	.onCreate(doc => {
		const post = doc.data();
		const notification = {
			content: 'Added a new post',
			user: post.name,
			time: new Date(),
		};
		return createNotification(notification);
	});
