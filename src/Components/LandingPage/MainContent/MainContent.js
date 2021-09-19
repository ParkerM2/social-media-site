import React from 'react';
import { Typography, Container, Box, Grid, Button } from '@mui/material';
import backgroundImage from '../../../images/background.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function MainContent() {

    return (
        <>
            <Box sx={{
                minHeight: '80vh', 
                position: 'relative',
                backgroundSize: 'cover',
                backgroundImage: `url(${backgroundImage})`, 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
                paddingBottom: '5vh',
                textAlign: 'left'
            }}>
                <Typography sx={{paddingTop: 12, paddingLeft: 6}} color="primary" align="left" variant="h2" marked="center"> Lorem Ipsum </Typography>
                    <Grid sx={{paddingTop: 12, paddingLeft: 6}} flexDirection="column" align="left" container spacing={8}>
                        <Grid item xs={10} md={6} lg={3}>
                            <Button fullWidth variant="contained" color="primary" endIcon={<ArrowForwardIosIcon />}>
                                  Jobs
                            </Button>
                        </Grid>
                        <Grid item xs={10} md={6} lg={3} >
                            <Button fullWidth variant="contained" color="primary" endIcon={<ArrowForwardIosIcon />}>
                                 Locations 
                            </Button>
                        </Grid>
                        <Grid item xs={10} md={6} lg={3}>
                            <Button fullWidth variant="contained" color="primary" endIcon={<ArrowForwardIosIcon />}>
                                 Employees
                            </Button>
                        </Grid>
                    </Grid>
            </Box>
        </>
    )
}