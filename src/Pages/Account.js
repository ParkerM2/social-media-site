import React, { useEffect, useState } from 'react';
import {
    Grid,
    Typography,
    Paper,
    CardContent,
    CardMedia,
    Card,
    Container,
    TextField,
    Button,
    Divider,
} from '@mui/material';
import { DropzoneArea } from 'material-ui-dropzone';
import UserNavbar from '../Components/userNavbar/userNavbar';
import Navbar from '../Components/LandingPage/Navbar/Navbar';
import Footer from '../Components/LandingPage/Footer/Footer';
import { db, useAuth } from '../context/AuthContext';
import { doc, getDoc } from '@firebase/firestore';
import stockPhoto from '../images/stockphoto.jpg';
// import { ProgressUpdateUserProfileImage } from '../Components/Progress/ProgressUserPhoto';
// import { updateProfile } from '@firebase/auth';

export default function Account () {
    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState();
    const [errorText, setErrorText] = useState('');
    const { currentUser } = useAuth();
    // const [newFullName, setNewFullName] = useState();
    // const [newUserName, setNewUserName] = useState();
    // const [newImage, setNewImage] = useState();
    // const [file1, setFile1] = useState();
    const userRef = doc(db, 'users', currentUser.uid);

    const getUserData = async () => {
        let newData;
        const userSnapShot = await getDoc(userRef);

        if (userSnapShot.data().uid !== 'undefined') {
            newData = userSnapShot.data();
        } else {
            setErrorText('error')
        }
        return newData
    };

    // const handleImageChange = (event) => {
    //     setFile1(newImage[0])
    // };

    useEffect(() => {
        let mounted = true;
        getUserData().then((userData) => {
            console.log('fired')
            if (mounted) {
                setUserData(userData);
                setLoading(true)
            }
        })
        return () => mounted = false;
    }, []);

    // const sendNewName = () => {
    //     updateProfile(currentUser, {
    //         displayName: newFullName
    //     }).then(() => {
    //         // set success here
    //     }).catch((error) => {
    //         // set error here
    //     })

    //     updateDoc(userRef,
    //         {
    //             'fullname': newFullName
    //         },
    //     );
    // };

    // const sendNewUserName = () => {
    //     updateDoc(userRef,
    //         {
    //             'username': newUserName
    //         },
    //     );
    // };

    return (
        <>
            {currentUser ? <UserNavbar /> : <Navbar />}
            {loading && userData ? (
                <Grid container sx={{ bgcolor: 'primary.dark', minHeight: '95vh', paddingBottom: 6 }} >
                    <Container maxWidth="xs" component="main">
                        <Grid container sx={{ paddingTop: 2 }} spacing={1} justifyContent="center">
                            <Grid lg={12} sm={12} item sx={{ minWidth: 365 }} >
                                <Card sx={{ maxWidth: 400, display: 'flex', bgcolor: 'primary.main', color: 'primary.contrastText' }}>
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
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        {!userData.username ?
                                            <Typography variant="p">
                                                Name has not been added yet.
                                            </Typography>
                                            :
                                            <Typography component="div" variant="h5">
                                                {userData.username}
                                            </Typography>
                                        }
                                        <Typography sx={{ paddingTop: 3 }}>
                                            {userData.photos.length} Post
                                        </Typography>
                                        <Typography>
                                            1 Saved
                                        </Typography>
                                        <Typography>
                                            {userData.followers.length} Follower
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item lg={12} sm={12} sx={{ minWidth: 365, paddingBottom: 5 }} flexDirection="column">
                                <Paper sx={{ bgcolor: 'primary.light', color: 'secondary.main', paddingTop: 2 }}>
                                    <Typography sx={{ paddingBottom: 1 }} color="secondary.main"> {userData.fullname}'s Settings </Typography>
                                    {/* account form here */}
                                    <Grid container spacing={2} justifyContent="center">
                                        <Grid item xs={5}>
                                            <Typography variant="caption">Current Users full name: {userData.fullname}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            {/* <TextField onChange={(event) => { setNewFullName(event.target.value) }} color="secondary" variant="outlined" label="full name"></TextField> */}
                                            <TextField color="secondary" variant="outlined" label="full name"></TextField>
                                        </Grid>
                                        <Grid item xs={11}>
                                            {/* <Button onClick={sendNewName} type="submit" fullWidth variant="contained">Submit New full name</Button> */}
                                            <Button fullWidth variant="contained">Disabled</Button>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Typography variant="caption">Current Users user name: {userData.username}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            {/* <TextField onChange={(event) => { setNewUserName(event.target.value) }} color="secondary" variant="outlined" label="user name"></TextField> */}
                                            <TextField color="secondary" variant="outlined" label="user name"></TextField>
                                        </Grid>
                                        <Grid item xs={11}>
                                            {/* <Button onClick={sendNewUserName} type="submit" fullWidth variant="contained">Submit New user name</Button> */}
                                            <Button fullWidth variant="contained">Disabled</Button>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Typography variant="caption">Update current user photo:</Typography>
                                        </Grid>
                                        <Grid item xs={11} sx={{ paddingBottom: 2 }}>
                                            <DropzoneArea
                                                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                                maxFileSize={5000000}
                                                filesLimit={1}
                                                accept="image/jpeg"
                                                // onChange={setNewImage}
                                                style={{ height: 40 }}
                                            />
                                        </Grid>
                                        <Grid item xs={11} sx={{ paddingBottom: 2 }}>
                                            {/* <Button onClick={handleImageChange} fullWidth component="label" variant="contained"> Submit new Photo
                                            </Button>
                                            {file1 && <ProgressUpdateUserProfileImage file1={file1} setFile1={setFile1} />} */}
                                            <Button fullWidth variant="contained">Disabled</Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            ) :
                (
                    <>
                        <Grid justifyContent="center" container sx={{ minHeight: '95vh', bgcolor: 'primary.dark', color: 'secondary.dark' }}>
                            {!errorText ?
                                <Typography variant="h3">Loading Account Page . . . </Typography>
                                :
                                <Typography color="secondary.dark" variant="h6">{errorText}</Typography>
                            }
                        </Grid>
                    </>
                )
            }
            <Divider />
            <Footer />
        </>
    );
};