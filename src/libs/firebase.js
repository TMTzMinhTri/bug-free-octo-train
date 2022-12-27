// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
	apiKey: "AIzaSyDEcuStaK0IukN7OyGTe9S60L6IQ1jbXlc",
	authDomain: "test-12bcc.firebaseapp.com",
	databaseURL: "https://test-12bcc.firebaseio.com",
	projectId: "test-12bcc",
	storageBucket: "test-12bcc.appspot.com",
	messagingSenderId: "193289771171",
	appId: "1:193289771171:web:a6e0e179983ab1812d8716"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const facebookProvider = new FacebookAuthProvider()
export const db = getFirestore();

export default app