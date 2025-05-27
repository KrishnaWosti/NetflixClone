import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyAwo88rGSE9V3UjR0Fa8BAQfrRrKHg60FM",
    authDomain: "netflix-clone-aa582.firebaseapp.com",
    projectId: "netflix-clone-aa582",
    storageBucket: "netflix-clone-aa582.firebasestorage.app",
    messagingSenderId: "449515869575",
    appId: "1:449515869575:web:5d7c42f3778c6cfac1ef22",
    measurementId: "G-PQ2G7LEKXK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"),
            {
                uid: user.uid,
                name,
                authProvider: "local",
                email,
            })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split("-").join(" "));

    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split("-").join(" "));

    }
}


const logout = () => {
    signOut(auth);
}


export { auth, db, login, signup, logout };