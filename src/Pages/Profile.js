import React, { useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    IconButton,
    Divider,
    Paper,
    Box,
    CardContent,
    CardMedia,
    Card,
    Container,
    Tabs,
    Tab,
    CardActions,
    CardActionArea
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Navbar from '../Components/userNavbar/userNavbar';
import Footer from '../Components/LandingPage/Footer/Footer';
import doggo from '../images/doggo.JPG';
import TabController from '../Components/ProfileImageContainer/TabController/TabController';



export default function Profile () {
    const [value, setValue] = useState(0);

    // handle change in tabs for viewing images or saved images
    const handleChange = ( event, newValue) => {
        setValue(newValue);
    };

    return(
        <>
            <Navbar />
                <Grid container sx={{bgcolor: 'primary.dark', minHeight: '90vh'}} >
                    <Container maxWidth="xs" component="main">
                        <Grid container sx={{paddingTop: 4}} spacing={1} justifyContent="center">
                            <Grid lg={12} sm={12} item sx={{minWidth: 365}} >
                                <Card sx={{maxWidth: 400, display: 'flex', bgcolor: 'primary.main', color: 'primary.contrastText'}}>
                                    <CardMedia
                                            component="img"
                                            sx={{ maxWidth: 151, maxHeight: 200 }}
                                            image={doggo}
                                            alt="profile picture"
                                        />
                                        <CardContent sx={{flex: '1 0 auto'}}>
                                            <Typography component="div" variant="h5">
                                                Parker Manning
                                            </Typography>
                                            <Typography sx={{paddingTop: 3}}>
                                                1 Post 
                                            </Typography>
                                            <Typography>
                                                1 Saved
                                            </Typography>
                                            <Typography>
                                                1 Follower
                                            </Typography>
                                        </CardContent>
                                </Card>
                            </Grid>

                            <Grid item lg={12} sm={12} sx={{minWidth: 365}} flexDirection="column">
                                <Paper>
                                    <TabController value={value} onChange={handleChange} />
                                </Paper>
                            </Grid>

                        </Grid>
                    </Container>
                </Grid>
            <Footer />
        </>
    )
}