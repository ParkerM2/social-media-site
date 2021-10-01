import React, { useEffect, useState } from 'react';
import MainCard from '../Components/mainCard/mainCard';
import {
    Grid,
    Typography,
} from '@mui/material';
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
        setLoading(true)

        getData().then((newArray) => {
            setCurrentList(newArray)
            setLoading(false)
        })

    }, []);

    return (
        <>
        <UserNavBar />
        <Grid justifyContent="center" flexDirection="column" container lg={12} sx={{bgcolor: 'primary.dark', minHeight: '100vh'}}>
            <Grid item lg={12}>
                {!loading && currentList ? 
                // <h1 color="secondary.main">hi</h1>
                    currentList.map((user) => (
                    user.photos[0] ? 
                        <MainCard
                            key={user.uid}
                            username={user.username}
                            userPhoto={user.userPhoto}
                            displayedImage={user.photos[0].url}
                            description={user.photos[0].description}
                            photoLocation={user.photos[0].date}
                            uid={user.uid}
                        />
                    :
                        null
                        
                ))
                : <Typography color="secondary">Loading ya stuffz . . .</Typography> }
            </Grid>
            </Grid>
            <Footer />
        </>
    )
}
