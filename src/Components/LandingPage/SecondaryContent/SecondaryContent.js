import React from 'react';
import { Avatar, CardHeader, Typography, Container, Box, IconButton, Grid, Button, Paper, Divider, CardMedia } from '@mui/material';
import rockbackground from '../../../images/rockbackground.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MainCard from '../../mainCard/mainCard';
import linus from '../../../images/linus.png';
import boatCardImage from '../../../images/boatpic.jpg';
import doggo from '../../../images/doggo.JPG';
const description = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one"

export default function SecondaryContent() {

    return (
        <>
            <Box sx={{
                minHeight: '90vh', 
                position: 'flex',
                backgroundSize: 'cover',
                backgroundImage: `url(${rockbackground})`, 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
                paddingBottom: '5vh',
                textAlign: 'left',
                paddingTop: '5vh'
            }}>
                <Box>

                    <Grid container sx={{padding: 6}} spacing={1}>
                        <Grid item xs={12} sm={12} lg={12}>
                            <Typography color="secondary.main" align="left" variant="h2" marked="center"> What is a Thing? </Typography>
                        </Grid>
                        <Grid item xs={10} sm={10} lg={12}>
                            <Typography color="primary.contrastText" align="left" variant="subtitle" marked="center">things are post containing images of things</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" spacing={3}>
                    {/* {username, userPhoto, displayedImage, description, photoLocation} */}
                        <Grid item>
                        <MainCard 
                            username={"Parker Manning"} 
                            userPhoto={doggo} 
                            displayedImage={boatCardImage}
                            description={description}
                            photoLocation={"Greenville, Ms"}
                        />
                        </Grid>
                        <Grid item>
                        <MainCard 
                            username={"Parker Manning"} 
                            userPhoto={doggo} 
                            displayedImage={boatCardImage}
                            description={description}
                            photoLocation={"Greenville, Ms"}
                        />
                        </Grid>
                        <Grid item>
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
    )
}