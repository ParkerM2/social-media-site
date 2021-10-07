import React, { useEffect, useState } from 'react';
import useStorage from '../../hooks/useStorage';
import { doc, arrayUnion, setDoc } from '@firebase/firestore';
import { db, useAuth } from '../../context/AuthContext';
import { Typography } from '@mui/material';

const ProgressAddImage = ({ file1, setFile1, description }) => {
    const { url, progress } = useStorage(file1);
    const { currentUser } = useAuth();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const userRef = doc(db, 'users', currentUser.uid)
    
    useEffect(() => {
        let mounted = true;
        if (url && mounted === true) {
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
        } else {
            setErrorMessage('An Error has occurred')
            setError(true)
        }
        return () => mounted = false;
    }, [url, setFile1, description, currentUser.uid, userRef])

    return (
        <>
            {!error ?
                <Typography> Progress : {progress} </Typography>
                :
                <Typography> Error: {errorMessage}</Typography>
            }
        </>
    );
};



export { ProgressAddImage };