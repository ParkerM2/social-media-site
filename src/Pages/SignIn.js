import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavBar from '../Components/LandingPage/Navbar/Navbar';
import Footer from '../Components/LandingPage/Footer/Footer';
import Paper from '@mui/material/Paper';
import Apartment from '@mui/icons-material/Apartment';
import { Divider } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SignIn() {
    const [errorText, setErrorText] = React.useState('')
    const history = useHistory();
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const data = new FormData(event.currentTarget);
        try {
            setErrorText('')
            await login(data.get('email'), data.get('password')).then((res) => {
                console.log(res)
                if (res.uid.length > 5) {
                    history.push('/home')
                } else {
                    setErrorText('An error occurred')
                }
            })
            // set success here so user can go to home page
        } catch {
            setErrorText('Invalid Email/Password')
            return;
        }
    
        // history.push('/home')
    };

    return (
        <>
            <Grid sx={{
                bgcolor: 'primary.dark',
                minHeight: '95vh',
                position: 'inherit',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
                textAlign: 'left',
                paddingBottom: 8
            }}>
                <NavBar />
                <Grid paddingTop={4} spacing={2} container justifyContent="center">
                    <Grid item xs={11} sm={7} md={3} lg={2}>
                        <Paper sx={{ bgcolor: 'primary.main', minHeight: 150 }}>
                            <Typography padding={2} align="center" color="secondary.dark" variant="h4" marked="center"> Feel free to log in with the following test account:</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={11} sm={7} md={3} lg={2}>
                        <Paper sx={{ bgcolor: 'primary.main', minHeight: 150 }}>
                            <Typography padding={2} align="center" color="secondary.dark" variant="h4" marked="center"> Email: Test@test.com<br></br> Password: 123456</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            paddingTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Paper square variant="outlined" sx={{ bgcolor: 'secondary.dark', color: 'primary.dark', padding: 4 }}>
                            <Grid container justifyContent="center">
                                <Grid item align="center">
                                    <Avatar sx={{ m: 2, bgcolor: 'primary.light' }}>
                                        <Apartment />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>

                                    {errorText &&
                                        <Typography component="h1" variant="h5">
                                            {errorText}
                                        </Typography>
                                    }
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
                                    <Grid item>
                                        <Link href="/register" variant="body2">
                                            {"Don't have an account? Sign Up"}
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
            </Grid>
            <Divider />
            <Footer />
        </>
    );
};