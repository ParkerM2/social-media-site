import React, { useState } from 'react';
import { 
    Typography,
    Box,
    Grid,
    Paper,
    Container,
    TextField,
    Divider,
    FormControlLabel,
    Checkbox,
    Link,
    CssBaseline,
    Button,
    Avatar,
} from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import desertbackground from '../../../images/desertbackground.jpg';
import RegistrationBox from '../../RegistrationBox/RegistrationBox';



const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };


export default function ThirdContent() {
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    return (
        <>
            <Divider />
            <Box sx={{
                minHeight: '80vh',
                position: 'flex',
                backgroundSize: 'cover',
                backgroundImage: `url(${desertbackground})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
                paddingBottom: '5vh',
                textAlign: 'left',
                paddingTop: '5vh'
            }}>
                <Box>

                    <Grid container sx={{ padding: 6 }} spacing={1}>
                        <Grid item xs={12} sm={12} lg={12}>
                            <Typography color="secondary.main" align="left" variant="h2" marked="center"> Register to do your own Thing </Typography>
                        </Grid>
                        <Grid item xs={10} sm={10} lg={12}>
                            <Typography color="secondary.main" align="left" variant="h6" marked="center">an account is needed to post and view things</Typography>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center" sx={{ padding: 2 }} spacing={1}>
                        <Grid justifyContent="center" sx={{ marginTop: 12, maxWidth: 500 }} item lg={4}>
                            <Paper elevation={18} sx={{ padding: 2, bgcolor: 'primary.main' }}>
                                <Typography variant="h4" color="secondary.dark">Register :</Typography>
                                <Typography color="secondary.dark">With an account you can view and post things</Typography>
                                <Typography color="secondary.dark">Accounts are free and supported with google firebase</Typography>
                            </Paper>
                        </Grid>
                        <Grid item lg={4}>
                            <RegistrationBox />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};