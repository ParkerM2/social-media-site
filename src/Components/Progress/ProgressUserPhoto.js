import React, { useEffect, useState } from 'react';
import useStorage from '../../hooks/useStorage';
import { Typography } from '@mui/material';
import { updateDoc, doc } from '@firebase/firestore';
import { updateProfile } from '@firebase/auth';
import { db, useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router';

const ProgressUpdateUserProfileImage = ({ file1, setFile1 }) => {
    const { url, progress } = useStorage(file1);
    const { currentUser } = useAuth();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [finishedMessage, setFinishedMessage] = useState();
    const history = useHistory();
    const userRef = doc(db, 'users', currentUser.uid)


    useEffect(() => {
        setFinishedMessage('')
        let mounted = true
        if (url && mounted === true) {
            // update firebase db
            updateDoc(userRef,
                { userPhoto: url },
                { merge: true }
            );
            // update user auth db
            updateProfile(currentUser, {
                photoURL: url
            }).then(() => {
                setFinishedMessage('Finished')
                history.go(0)
            }).catch((error) => {
                setErrorMessage(error)
                return setError(true);
            })
        };

        return () => mounted = false;

    }, [url, setFile1, currentUser, userRef, history])

    return (
        <>
            {!error ?
                <Typography> Progress : {progress} </Typography>
                :
                <Typography> Error: {errorMessage} {finishedMessage}</Typography>
            }
        </>
    );
};



export {ProgressUpdateUserProfileImage};