import React, { useEffect, useState } from 'react';
import {
    Grid,
    Typography,
    Paper,
    CardContent,
    CardMedia,
    Card,
    Container,
} from '@mui/material';
import Navbar from '../Components/userNavbar/userNavbar';
import Footer from '../Components/LandingPage/Footer/Footer';
import doggo from '../images/doggo.JPG';
import TabController from '../Components/ProfileImageContainer/TabController/TabController';
import {useParams} from 'react-router-dom';
import { db } from '../context/AuthContext';
import { doc, getDoc, } from '@firebase/firestore';


export default function Profile () {
    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState();
    const [value, setValue] = useState(0);
    const { id } = useParams();
    
    const userRef = doc(db, 'users', id);

    async function getUserData () {
        setLoading(false)
        try{

            const userSnapShot = await getDoc(userRef);

            if ( userSnapShot ) {
                console.log('doc data:', userSnapShot.data());
                setUserData(userSnapShot.data())
            } else {
                // undefined
                console.log('no user found')
            }

        } catch {
            console.log('error')
        }
        setLoading(true)
        return
    }

    useEffect(() => {
        const unsub = getUserData();
        console.log('use effect fired')

        return unsub;
    }, []);

    // when uid is first put into firestore, other base fields should be created or at least called and created then
    // handle change in tabs for viewing images or saved images
    const handleChange = ( event, newValue) => {
        setValue(newValue);
    };

    return(
        <>
            <Navbar />
            {loading ? (
                <Grid container sx={{bgcolor: 'primary.dark', minHeight: '90vh'}} >
                    <Container maxWidth="xs" component="main">
                        <Grid container sx={{paddingTop: 4}} spacing={1} justifyContent="center">
                            <Grid lg={12} sm={12} item sx={{minWidth: 365}} >
                                <Card sx={{maxWidth: 400, display: 'flex', bgcolor: 'primary.main', color: 'primary.contrastText'}}>
                                    <CardMedia
                                            component="img"
                                            sx={{ maxWidth: 151, maxHeight: 200 }}
                                            image={doggo}
                                            alt="profile picture"
                                        />
                                        <CardContent sx={{flex: '1 0 auto'}}>
                                                {!userData.username ? 
                                                    <Typography variant="p">
                                                        Name has not been added yet.
                                                    </Typography>
                                                 : 
                                                    <Typography component="div" variant="h5">
                                                        {userData.username}
                                                    </Typography>
                                                }
                        
                                            <Typography sx={{paddingTop: 3}}>
                                                 Post
                                            </Typography>
                                            <Typography>
                                                1 Saved
                                            </Typography>
                                            <Typography>
                                                1 Follower
                                            </Typography>
                                        </CardContent>
                                </Card>
                            </Grid>

                            <Grid item lg={12} sm={12} sx={{minWidth: 365}} flexDirection="column">
                                <Paper>
                                    <TabController value={value} onChange={handleChange} />
                                </Paper>
                            </Grid>

                        </Grid>
                    </Container>
                </Grid>
            ):
            (
            <Typography>Loading</Typography>
            )}
            <Footer />
        </>
    )
}