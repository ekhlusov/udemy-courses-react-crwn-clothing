import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCWlUGhtdfL9tzPOmjh7MABnNkSbzj34Nk",
	authDomain: "udemy-crwn-react-app.firebaseapp.com",
	databaseURL: "https://udemy-crwn-react-app.firebaseio.com",
	projectId: "udemy-crwn-react-app",
	storageBucket: "",
	messagingSenderId: "598573061903",
	appId: "1:598573061903:web:83b95653f67c7e7c68907a"
};

// Store users
export const createUserProfileDocument = async (userAuth, additionData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionData
			});
		} catch (e) {
			console.log("error creating user", e.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
