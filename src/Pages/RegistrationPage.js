import * as React from 'react';
import {
    Grid,
    Divider,
} from '@mui/material';
import Footer from '../Components/LandingPage/Footer/Footer';
import NavBar from '../Components/LandingPage/Navbar/Navbar';
import RegistrationBox from '../Components/RegistrationBox/RegistrationBox';

export default function SignUp() {

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