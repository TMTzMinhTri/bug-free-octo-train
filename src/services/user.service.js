import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../libs/firebase";

export const userRef = (uid) => doc(db, 'users', uid);

const userService = {
	add: (data) => {
		// const ref = doc(collection(db, 'users'))
		// return setDoc(ref, data);

		// const ref = collection(db, 'users');
		// return addDoc(ref, data);

		const ref = doc(db, 'users', data.uid);
		delete data.uid;
		return setDoc(ref, data);
	},
	getUserInfo: (uid) => {
		return getDoc(userRef(uid))
	}
}

export default userService