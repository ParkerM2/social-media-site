import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import NavBar from '../Components/LandingPage/Navbar/Navbar';
import Footer from '../Components/LandingPage/Footer/Footer';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import AddImage from '../Components/ProfileImageContainer/AddImage/AddImage';


export default function UpdateProfile() {
    const { signup, currentUser, logout } = useAuth();
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false)
    const [success, setSuccess] = React.useState(false);
    const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // check for password confirmation
    if (data.get('password') !== data.get('confirmPassword')) {
        return setError("Passwords Do Not Match")
    };
    
    // try/catch clean state of error and set loading to tre
    // loading to true disables current use of button so multiple accounts are not created
    // history.push sends user back to home page (might change to login page)
    try{
        setError("")
        setLoading(true)
        await signup(data.get('email'), data.get('password'))
        setSuccess(true)
        // put a snackbar popup for success******
        history.push('/update')
    } catch {
        console.log('error hoe')
    }
   

    // sets button back to not being disabled
    setLoading(false)
  };

    return(
        <>
        <NavBar />
        <Grid sx={{
                bgcolor: 'primary.dark', 
                minHeight: '90vh', 
                position: 'relative',
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
                textAlign: 'left',
                paddingBottom: 8
            }}>
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
            <Paper square variant="outlined" sx={{bgcolor: 'white', color: 'secondary', padding: 4}}>
                <Grid container justifyContent="center">
                    <Grid item align="center">
                        <Avatar sx={{ m: 2, bgcolor: 'secondary.dark' }}>
                            <ApartmentIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Update Profile
                        </Typography>
                    </Grid>
                </Grid>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="displayName"
                            label="Display Name"
                            name="displayName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="phoneNumber"
                            label="Phone Number"
                            type="number"
                            id="phoneNumber"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography> Choose a Profile Picture </Typography>
                            <AddImage
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I want to receive things via email."
                            />
                        </Grid>
                    </Grid>
                        <Button
                            disabled={loading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            >
                           Submit
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
        </Grid>
        <Divider />
        <Footer />
        </>
    );
}