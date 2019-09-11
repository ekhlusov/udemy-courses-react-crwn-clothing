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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
