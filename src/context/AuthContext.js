import React, { useContext, useState, useEffect, createContext } from 'react';
import { useHistory } from 'react-router';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, sendPasswordResetEmail, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getFirestore, setDoc, doc, collection, getDocs,  } from "@firebase/firestore";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
require('dotenv').config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "social-media-site-52678.firebaseapp.com",
  projectId: "social-media-site-52678",
  storageBucket: "social-media-site-52678.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage};

const AuthContext = createContext();
const auth = getAuth();

export function useAuth() {
    return useContext(AuthContext)
};


export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    

    function signup(email, password, firstName, lastName) {

        return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // signed in with new user
            const user = userCredential.user;
            const userID = user.uid;
            setDoc(doc(db,'users', userID),{uid: userID, email: email,})
        }).catch((error) => {
            console.log(error)
        })
        
    };

    function login(email, password) {     
        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                // Existing and future Auth states are now persisted in the current
                // session only. Closing the window would clear any existing state even
                // if a user forgets to sign out.
                // ...
                // New sign-in will be persisted with session persistence.
                return signInWithEmailAndPassword(auth, email, password);
            })
            .catch((error) => {
                // Handle Errors here.
            });
    return signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // signed in
            const user = userCredential.user;
            return user;
            }).catch((error) => {
                console.log(error.message)
            });
    };

    function logout() {
        // history.push('/login');
        return signOut(auth);
    };

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    };

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    };

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        });

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};

