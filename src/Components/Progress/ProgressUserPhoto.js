import React, { useEffect, useState } from 'react';
import useStorage from '../../hooks/useStorage';
import { updateDoc, doc } from '@firebase/firestore';
import { updateCurrentUser, updateProfile } from '@firebase/auth';
import { db, useAuth } from '../../context/AuthContext';

const ProgressUpdateUserProfileImage = ({ file1, setFile1 }) => {
    const { url, progress } = useStorage(file1);
    const { currentUser } = useAuth();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
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
                // finished
            }).catch((error) => {
                setErrorMessage(error)
                return setError(true);
            })
        }

    }, [url, setFile1])

    return (
        <>
            {!error ?
                <div> Progress : {progress} </div>
                :
                <div> Error: {errorMessage}</div>
            }
        </>
    );
};



export {ProgressUpdateUserProfileImage};