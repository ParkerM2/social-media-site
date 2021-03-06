import * as React from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Paper,
    Container,
    IconButton,
} from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { db, useAuth } from '../../context/AuthContext';
import {doc, setDoc, serverTimestamp, query, collection, where, getDocs,} from 'firebase/firestore';
import {updateProfile, getAuth, signOut} from 'firebase/auth';
import { useHistory } from 'react-router';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function RegistrationBox() {
    const { signup } = useAuth();
    const [error, setError] = React.useState("");
    // const [loading, setLoading] = React.useState(false)
    const history = useHistory();

    async function doesUsernameExist(username) {
        // define query params for firestore collection of users
        const q = query(collection(db, 'users'), where('username', '==', username.toLowerCase()));

        //  await the result from the query snapshot
        const result = await getDocs(q);

        //  return if the length of the result is over 0 signaling a previous username
        return result.docs.length > 0;
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        // grab form data
        const data = new FormData(event.currentTarget);

        // check for password confirmation
        if (data.get('password') !== data.get('confirmPassword')) {
            return setError("Passwords Do Not Match")
        };

        // check the db if the username already exist
        const usernameExist = await doesUsernameExist(data.get('userName'));

        // check email validity 
        if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.get('email')) === true) {
            setError('')
        } else {
            setError('Not a correct Email')
            return;
        }

        // if the username already exist don't allow a new user
        if (!usernameExist) {
        
            try {
                const auth = getAuth();
                // sign out any current users before creating a new signed in user instance
                signOut(auth);

                await signup(data.get('email'), data.get('password')).then((user) => (
                    // update profile display name
                    updateProfile(user, {
                        displayName: data.get('userName')
                    }).then(() => {
                        //  add user data and structure to firestore collection
                        setDoc(doc(db, 'users', user.uid), {
                            username: data.get('userName').toLowerCase(),
                            fullname: data.get('fullName'),
                            emailAddress: data.get('email').toLowerCase(),
                            following: [],
                            followers: [],
                            photos: [],
                            dateCreated: serverTimestamp(),
                            uid: user.uid,
                        })
                    })
                ));
                // send user to the home page
                history.push('/home');
            } catch (error) {
                setError(error.message)
                return;
            }
            // setLoading(false)
        } else {
            setError('That Username is already taken');
            return;
        }
    }

    return (
        <>

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        paddingTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Paper square variant="outlined" sx={{ bgcolor: 'secondary.dark', color: 'primary.dark', padding: 4 }}>
                        <Grid container justifyContent="center">
                            <Grid item align="center">
                                <Avatar sx={{ m: 2, bgcolor: 'primary.light' }}>
                                    <ApartmentIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign up
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            {error && <Typography sx={{ padding: 1, color: 'red' }} variant="h6"> <b>{error}</b> </Typography>}
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="userName"
                                        label="UserName"
                                        name="userName"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="fullName"
                                        label="Full Name"
                                        name="fullName"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="new-password"
                                        id="password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        type="new-password"
                                        id="confirmPassword"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive things via email."
                                    />
                                </Grid>
                            </Grid>
                            {/* <Button
                                disabled={loading}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button> */}
                            <Button sx={{ mt: 3, mb: 2 }} fullWidth variant="contained">Disabled</Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/signin" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center" paddingTop={2}> 
                                <Paper sx={{ bgcolor: 'primary.main' }} variant="outlined">
                                    <Typography align="center" padding={1} color="secondary.dark" variant="h5" marked="center"> ** Database functions are currently disabled to make sure I'm not charged by firebase. **<br></br> Feel free to look at my github to view the code.</Typography>
                                    <Grid container justifyContent="center">
                                        <Grid item>
                                            <IconButton href="https://github.com/ParkerM2/social-media-site">
                                                <GitHubIcon fontSize="large" color="secondary" />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </>
    );
};