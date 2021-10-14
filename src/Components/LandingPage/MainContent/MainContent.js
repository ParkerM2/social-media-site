import React from 'react';
import { Typography, Box, Grid, Button, Paper } from '@mui/material';
import backgroundImage from '../../../images/background.jpg'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from 'react-scroll';

export default function MainContent() {

    return (
        <>
            <Box sx={{
                height: '90vh',
                position: 'relative',
                backgroundSize: 'cover',
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
                paddingBottom: '5vh',
                textAlign: 'left'
            }}>
                <Box>
                    <Typography sx={{ paddingTop: 6, paddingLeft: 6 }} color="primary" align="left" variant="h2" marked="center"> Thing </Typography>
                    <Typography sx={{ paddingTop: 12, paddingLeft: 6 }} color="primary" align="left" variant="subtitle" marked="center">noun: an abstract entity, quality, or concept</Typography>
                    <Grid sx={{ paddingTop: 12, paddingLeft: 6 }} flexDirection="column" align="left" container spacing={8}>
                        <Grid item xs={10} md={4} lg={3} >
                            <Link to="secondaryContent" smooth={true}>
                                <Button fullWidth variant="contained" color="primary" endIcon={<ArrowDownwardIcon color="secondary" />}>
                                    <Typography color="secondary">Find Out More below</Typography>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid paddingTop={8} container justifyContent="center" spacing={2}>
                        <Grid item xs={10} md={5} lg={4}>
                            <Paper sx={{bgcolor: 'primary.main', minHeight: 150 }}>
                                <Typography align="center" padding={1} color="secondary.dark" variant="h3" marked="center"> Feel free to log in with the following test account:</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={10} md={5} lg={4}>
                            <Paper sx={{bgcolor: 'primary.main', minHeight: 150 }}>
                                <Typography align="center" padding={1} color="secondary.dark" variant="h3" marked="center"> Email: Test@test.com<br></br> Password: 123456</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};