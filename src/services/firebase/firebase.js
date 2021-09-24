import { db } from "../../context/AuthContext"
import { collection, doc, setDoc, getDoc, query, where, getDocs} from 'firebase/firestore';
import { async } from "@firebase/util";

// check to see if username previously exist on db
export async function doesUsernameExist (username) {

    // define query params for firestore collection of users
    const q = query(collection(db, 'users'), where('username', '==', username.toLowerCase()));

    //  await the result from the query snapshot
    const result = await getDocs(q);

    //  return if the length of the result is over 0 signaling a previous username
    return result.docs.length > 0;
};

// get user informatin by their username
export async function getUserbyUsername (username) {
    
    // define query params for firestore collection by username
    const q = query(collection(db, 'users'), where('username', '==', username.toLowerCase()));

    // await result from query snapshot
    const result = await getDocs(q);

    // return the result .data() contains the {} from firestore
    return result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }))
};

// get user info by the userID (userID is available in firestore('users') === firestore(auth))
export async function getUserByUserId(userId) {

    // define query params for firestore collection by userId
    const q = query(collection(db, 'users'), where('uid', '==', userId));

    // await result from query snapshot
    const result = await getDocs(q);

    // define user
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));

    // return the user
    return user;
};


