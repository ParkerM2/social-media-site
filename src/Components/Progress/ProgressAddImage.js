import React, { useEffect, useState } from 'react';
import useStorage from '../../hooks/useStorage';
import { doc, arrayUnion, setDoc } from '@firebase/firestore';
import { db, useAuth } from '../../context/AuthContext';

const ProgressAddImage = ({ file1, setFile1, description }) => {
    const { url, progress } = useStorage(file1);
    const { currentUser } = useAuth();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const userRef = doc(db, 'users', currentUser.uid)

    useEffect(() => {
        console.log('useEffect on progressupdateuserprofileimage fired')
        if (url) {
            // update firebase db with new image and image data
            setDoc(userRef,
                {
                    'photos': arrayUnion(
                        {
                            url: url,
                            description: description,
                            alt: 'image',
                        }
                    )
                },
                { merge: true }
            )
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



export { ProgressAddImage };