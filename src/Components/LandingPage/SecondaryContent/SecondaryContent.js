import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import rockbackground from '../../../images/rockbackground.jpg'
import MainCard from '../../mainCard/mainCard';
import boatCardImage from '../../../images/boatpic.jpg';
import doggo from '../../../images/doggo.JPG';
const description = "Contrary to popular Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one"

export default function SecondaryContent() {

    return (
        <>
            <Box id="secondaryContent" sx={{
                minHeight: '80vh',
                position: 'flex',
                backgroundSize: 'cover',
                backgroundImage: `url(${rockbackground})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
                paddingBottom: '5vh',
                textAlign: 'left',
                paddingTop: '5vh',
            }}>
                <Box>

                    <Grid container sx={{ padding: 6 }} spacing={1}>
                        <Grid item xs={12} sm={12} lg={12}>
                            <Typography color="secondary.main" align="left" variant="h2" marked="center"> What is a Thing? </Typography>
                        </Grid>
                        <Grid item xs={10} sm={10} lg={12}>
                            <Typography color="secondary.main" align="left" variant="h6" marked="center">things are post containing images of things</Typography>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center" sx={{ paddingLeft: 0 }} spacing={3}>
                        <Grid justifyContent="center" sx={{ marginTop: 20, maxWidth: 500 }} item lg={4}>
                            <Paper elevation={18} sx={{ padding: 2, bgcolor: 'primary.main' }}>
                                <Typography variant="h4" color="secondary.dark">Things :</Typography>
                                <Typography color="secondary.dark">Use your profile to post things</Typography>
                                <Typography color="secondary.dark">Each thing contains a picture and description</Typography>
                            </Paper>
                        </Grid>
                        {/* {username, userPhoto, displayedImage, description, photoLocation} */}
                    
                        <Grid item lg={4}>
                            <MainCard
                                username={"Parker Manning"}
                                userPhoto={doggo}
                                displayedImage={boatCardImage}
                                description={description}
                                photoLocation={"Greenville, Ms"}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};