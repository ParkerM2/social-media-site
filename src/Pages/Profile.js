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
import UserNavbar from '../Components/userNavbar/userNavbar';
import Navbar from '../Components/LandingPage/Navbar/Navbar';
import Footer from '../Components/LandingPage/Footer/Footer';
import doggo from '../images/doggo.JPG';
import TabController from '../Components/ProfileImageContainer/TabController/TabController';
import {useParams} from 'react-router-dom';
import { db, useAuth } from '../context/AuthContext';
import { doc, getDoc, } from '@firebase/firestore';
import UploadImageButton from '../Components/UploadImageButton/UploadImageButton';
import stockPhoto from '../images/stockphoto.jpg';


export default function Profile () {
    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState();
    const [value, setValue] = useState(0);
    const { currentUser } = useAuth();
    const { id } = useParams();
    const [errorText, setErrorText] = useState('');
    
    const userRef = doc(db, 'users', id);

    async function getUserData () {
        
        try{
            setLoading(false)
            const userSnapShot = await getDoc(userRef);

            if ( userSnapShot.data().uid !== 'undefined' ) {
                console.log('doc data:', userSnapShot.data());
                setUserData(userSnapShot.data())
                setLoading(true)
            } else {
                // set error to show an user profile not found screen <<-
                console.log('no user found')
            }

        } catch {
            setLoading()
            setErrorText('yo error')
            return 
        }
        
        return
    }

    useEffect(() => {
        const unsub = getUserData();
        return unsub;
    }, [id]);


    const handleChange = ( event, newValue) => {
        setValue(newValue);
    };

    return(
        <>
            {currentUser ? <UserNavbar /> : <Navbar />}
            {loading && userData ? (
                <Grid container sx={{bgcolor: 'primary.dark', minHeight: '90vh'}} >
                    <Container maxWidth="xs" component="main">
                        <Grid container sx={{paddingTop: 4}} spacing={1} justifyContent="center">
                            <Grid lg={12} sm={12} item sx={{minWidth: 365}} >
                                <Card sx={{maxWidth: 400, display: 'flex', bgcolor: 'primary.main', color: 'primary.contrastText'}}>
                                    {userData.userPhoto ?
                                        <CardMedia
                                            component="img"
                                            sx={{ maxWidth: 151, maxHeight: 200 }}
                                            image={userData.userPhoto}
                                            alt="profile picture"
                                        />
                                    : 
                                        <CardMedia
                                            component="img"
                                            sx={{ maxWidth: 151, maxHeight: 200 }}
                                            image={stockPhoto}
                                            alt="profile picture"
                                        />
                                    }
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

                            <Grid item lg={12} sm={12} sx={{minWidth: 365, paddingBottom: 5}} flexDirection="column">
                                <Paper>
                                    <TabController userData={userData} value={value} onChange={handleChange} />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            ):
            (
                <>
                {!errorText ? 
                <Typography variant="h4">Loading...</Typography> :
                <Typography variant="h6">{errorText}</Typography>
                }
                </>
            )
            }
            <Footer />
        </>
    )
}