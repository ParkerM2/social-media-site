import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import { updateDoc, doc } from '@firebase/firestore';
import { updateCurrentUser, updateProfile } from '@firebase/auth';
import { db, useAuth } from '../../context/AuthContext';

const ProgressUpdateUserProfileImage = ({file1 , setFile1}) => {
    const { url, progress } = useStorage(file1);
    const { currentUser } = useAuth();
    const userRef = doc(db, 'users', currentUser.uid)

    useEffect(() => {
        console.log('useEffect on progressupdateuserprofileimage fired')
        if (url) {
            // update firebase db
            updateDoc(userRef,
                { userPhoto: url },
                { merge: true }
            );
            // update user auth db
            updateProfile(currentUser, {
                photoURL: url
            }).then(() => {
                console.log('finito')
            }).catch((error) => {
                return error;
            })
        }

    },[url, setFile1])

    return (
        <div> Progress : {progress} </div>
    )
}



export {ProgressUpdateUserProfileImage};