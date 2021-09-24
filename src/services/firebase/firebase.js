import { db } from "../../context/AuthContext"
import { collection, doc, setDoc, query, where, getDocs, FieldValue} from 'firebase/firestore';

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

// update users following
export async function updateLoggedInUserFollowing (
    loggedInUserId, // currently logged in user
    profileId, // user the current person is follow/unfollowing
    isFollowing, // true/false following yes/no
)   
    {
        // set the value to true or false per ProfileID
        return setDoc(doc(db, 'users', loggedInUserId),{
            following: isFollowing ?
            FieldValue.arrayRemove(profileId) :
            FieldValue.arrayUnion(profileId)
        });
};

//  update the followed users followers (basically opposite of the above function)
export async function updateFollowedUserFollwers(loggedInUserId, profileId, isFollowing) {

    // set the value to true or false per LoggedInUserId
    return setDoc(doc(db,'users', profileId), {
        following: isFollowing ?
        FieldValue.arrayRemove(loggedInUserId) :
        FieldValue.arrayUnion(loggedInUserId)
    });
};

// grab da photos
export async function getPhotos(userId, following) {

    // query the collection 'photos' where the current userID is in the following list
    const q = query(collection(db, 'photos'), where(userId, 'in', following));

    const userFollowedPhotos = (await getDocs(q)).docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id
    }));

    const photosWithUserDetails = await Promise.all(
        userFollowedPhotos.map(async (photo) => {
            let userLikedPhoto = false;
            if (photo.likes.includes(userId)) {
                userLikedPhoto = true;
            }
            const user = await getUserByUserId(photo.userId);

            const { username } = user[0];

            return { username, ...photo, userLikedPhoto};
        })
    )
    
    return photosWithUserDetails;
};


// get photos by user id
export async function getUserPhotosByUserId(userId) {

    // setup Query for photos collection
    const q = query(collection(db, 'photos'), where('uid', '==', userId));

    const photos = await getDocs(q).docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id
    }));

    return photos;
};

// is the user following?
export async function isUserFollowingProfile(loggedInUserUserName, profileUserId) {
    
    const q = query(collection(db, 'users'), 
        where('username', '==', loggedInUserUserName), 
        where('following', 'array-contains', profileUserId));

    const [response = {}] = getDocs(q).docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));

    return response.userId;
};

export async function toggleFollow(
    isFollowingProfile,
    activeUserDocId,
    profileDocId,
    profileUserId,
    followingUserId,
) {
    await updateLoggedInUserFollowing(activeUserDocId, profileUserId, isFollowingProfile);

    await updateFollowedUserFollwers(profileDocId, followingUserId, isFollowingProfile);
};
