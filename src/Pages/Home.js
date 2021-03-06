import React, { useEffect, useState } from 'react';
import MainCard from '../Components/mainCard/mainCard';
import { Grid, Typography } from '@mui/material';
import UserNavBar from '../Components/userNavbar/userNavbar';
import { db } from '../context/AuthContext';
import { getDocs, collection } from '@firebase/firestore';
import Footer from '../Components/LandingPage/Footer/Footer';


export default function Home () {
    const [currentList, setCurrentList] = useState();
    const [loading, setLoading] = useState();

    const getData = async () => {
        let newArray = [];
        const querySnapshot = await getDocs(collection(db, 'users'));

        querySnapshot.forEach((doc) => {
            newArray.push(doc.data())
        });
        
        return newArray
    }

    
    useEffect(() => {
        let mounted = true;
        setLoading(true)
        getData().then((newArray) => {
            console.log('useeffect fired')
            if (mounted) {
                setCurrentList(newArray)
                setLoading(false)
            }
        })
        return () => mounted = false;
    }, []);

    return (
        <>
            <UserNavBar />
            <Grid justifyContent="space-around" container sx={{ bgcolor: 'primary.dark', minHeight: '100vh' }}>
            
                {!loading && currentList ?
                    currentList.map((user) => (
                        user.photos[0] ? user.photos.map((photo) => (
                            <Grid item key={photo.url} xs={12} xl={2}>
                                <MainCard
                                    key={user.uid}
                                    username={user.username}
                                    userPhoto={user.userPhoto}
                                    displayedImage={photo.url}
                                    description={photo.description}
                                    photoLocation={''}
                                    uid={user.uid}
                                />
                            </Grid>
                        ))
                            :
                            null
                    ))
                    : <Typography sx={{ padding: 4 }} color="secondary" variant="h3">Loading Images . . .</Typography>}
            </Grid>
            
            <Footer />
        </>
    );
};
