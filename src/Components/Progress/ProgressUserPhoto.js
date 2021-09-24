import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import { updateDoc,doc } from '@firebase/firestore';
import { useAuth } from '../../context/AuthContext';

const ProgressUpdateUserProfileImage = ({file , setFile}) => {
    const { url, progress } = useStorage(file);
    const { currentUser } = useAuth();
    // const galleryRef = doc(db, 'gallery', `about`);
    console.log(currentUser, 'progress')


    useEffect(() => {
        // if (url) {
        //     if (file) {
        //         updateDoc(galleryRef, {
        //             'about1.url': url
        //         },{merge: true}
        //     )}
        //     setFile1(null)
        // }
    },[url, setFile])

    return (
        <div> Progress : {progress} </div>
    )
}



export {ProgressUpdateUserProfileImage};