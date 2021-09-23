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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavBar from '../Components/LandingPage/Navbar/Navbar';
import Footer from '../Components/LandingPage/Footer/Footer';
import Paper from '@mui/material/Paper';
import Apartment from '@mui/icons-material/Apartment';
import { Divider } from '@mui/material';

export default function SignIn() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    });
  };

  return (
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
                                        <Apartment />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                />
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                />
                                <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                                />
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                Sign In
                                </Button>
                                <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                    Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                                </Grid>
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