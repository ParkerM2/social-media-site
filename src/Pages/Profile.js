import React, { useEffect, useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    IconButton,
    Divider,
    Paper,
    Box,
    CardContent,
    CardMedia,
    Card,
    Container,
    Tabs,
    Tab,
    CardActions,
    CardActionArea
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Navbar from '../Components/userNavbar/userNavbar';
import Footer from '../Components/LandingPage/Footer/Footer';
import doggo from '../images/doggo.JPG';
import TabController from '../Components/ProfileImageContainer/TabController/TabController';
import { useLocation, Link, useHistory, useParams} from 'react-router-dom';
import { db } from '../context/AuthContext';
import { doc, getDoc, setDoc, } from '@firebase/firestore';


export default function Profile () {
    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(0);
    const { id } = useParams();
    const [displayName, setDisplayName] = useState();
    
    const userRef = doc(db, 'users', id);

    async function getUserData () {
        try{
            const userSnapShot = await getDoc(userRef);

            if ( userSnapShot ) {
                console.log('doc data:', userSnapShot.data());
                setUserData(userSnapShot.data())
                setLoading(true)
            return;
            } else {
                // undefined
                console.log('no user found')
            }

            if ( userData.displayName !== 'undefined') {
                setDisplayName(true)
            } else {
                setDisplayName(false);
            }
        } catch {
            console.log('error')
        }
        return
    }

    useEffect(() => {
        getUserData();
        console.log('use effect fired')
    }, []);


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
                                                {!displayName ? 
                                                    <Typography variant="p">
                                                        Name has not been added yet.
                                                    </Typography>
                                                 : 
                                                    <Typography component="div" variant="h5">
                                                        {userData.displayName}
                                                    </Typography>
                                                }
                        
                                            <Typography sx={{paddingTop: 3}}>
                                                {userData.post && userData.post.length} Post
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