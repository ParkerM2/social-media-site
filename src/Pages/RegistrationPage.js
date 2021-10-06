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
    Divider,
} from '@mui/material';
import Footer from '../Components/LandingPage/Footer/Footer';
import NavBar from '../Components/LandingPage/Navbar/Navbar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { db, useAuth } from '../context/AuthContext';
import {doc, setDoc, serverTimestamp, query, collection, where, getDocs,} from 'firebase/firestore';
import {updateProfile, getAuth, signOut} from 'firebase/auth';
import { useHistory } from 'react-router';
import RegistrationBox from '../Components/RegistrationBox/RegistrationBox';

export default function SignUp() {
    const { signup } = useAuth();
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false)
    const history = useHistory();

    async function doesUsernameExist (username) {

        // define query params for firestore collection of users
        const q = query(collection(db, 'users'), where('username', '==', username.toLowerCase()));

        //  await the result from the query snapshot
        const result = await getDocs(q);

        //  return if the length of the result is over 0 signaling a previous username
        return result.docs.length > 0;
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        // check for password confirmation
        if (data.get('password') !== data.get('confirmPassword')) {
            return setError("Passwords Do Not Match")
        };

        // check the db if the username already exist
        const usernameExist= await doesUsernameExist(data.get('userName'));

        // check email validity 
        if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.get('email')) === true) {
            setError('')
        } else {
            setError('Not a correct Email')
            return;
        }

        // if the username already exist don't allow a new user
        if (!usernameExist) {
        
            try{
                const auth = getAuth();
                // sign out any current users before creating a new signed in user instance
                signOut(auth);

                await signup(data.get('email'), data.get('password')).then((user) => (
                    // update profile display name
                    updateProfile(user, {
                        displayName: data.get('userName')
                    }),
                    //  add user data and structure to firestore collection
                    setDoc(doc(db, 'users', user.uid), {
                        username: data.get('userName').toLowerCase(),
                        fullname: data.get('fullName'),
                        emailAddress: data.get('email').toLowerCase(),
                        following: [],
                        followers: [],
                        photos:[],
                        dateCreated: serverTimestamp(),
                        uid: user.uid,
                    })
                ));
                // send user to the home page
                // history.push('/home');
            } catch(error) {
                setError(error.message)
            }
            setLoading(false)
        } else {
            setError('That Username is already taken');
        }
    }
    return(
        <>
        <NavBar />
            <Grid sx={{
                    bgcolor: 'primary.dark', 
                    minHeight: '95vh', 
                    position: 'relative',
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover',
                    textAlign: 'left',
                    paddingBottom: 8
                }}>

                <RegistrationBox />
                    
            </Grid>
        <Divider />
        <Footer />
        </>
    );
}