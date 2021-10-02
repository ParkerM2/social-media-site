import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import { updateDoc, doc, arrayUnion, setDoc } from '@firebase/firestore';
import { updateCurrentUser, updateProfile } from '@firebase/auth';
import { db, useAuth } from '../../context/AuthContext';

const ProgressAddImage = ({file1 , setFile1, description}) => {
    const { url, progress } = useStorage(file1);
    const { currentUser } = useAuth();
    const userRef = doc(db, 'users', currentUser.uid)

    useEffect(() => {
        console.log('useEffect on progressupdateuserprofileimage fired')
        if (url) {
            // update firebase db with new image and image data
           updateDoc(userRef,
                {
                    'photos': arrayUnion(
                    {
                        url: url,
                        description: 'description',
                        alt: 'image',
                    }
                )},
                { merge: true }
            )
        }
    },[url, setFile1])

    return (
        <div> Progress : {progress} </div>
    )
}



export { ProgressAddImage };