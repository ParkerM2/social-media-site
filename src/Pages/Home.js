import React from 'react';
import MainCard from '../Components/mainCard/mainCard';
import {
    Grid,
} from '@mui/material';
import UserNavBar from '../Components/userNavbar/userNavbar';
import boatCardImage from '../images/boatpic.jpg';
import doggo from '../images/doggo.JPG';
const description = "Contrary to popular belisdfsdfsdfsdfsdfsdfs sdfsd s sdf sd sdf sdf sfd sdfsdfsd sdfsdfsd ef, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one"

// card takes
// username, userPhoto, displayedImage, description, photoLocation



export default function Home () {


    return (
        <>
        <UserNavBar />
        <Grid container lg={12} sx={{bgcolor: 'primary.dark', minHeight: '100vh'}}>
            <Grid item lg={12}>
                <MainCard 
                    username={"parker manning"}
                    userPhoto={doggo}
                    displayedImage={boatCardImage}
                    description={description}
                    photoLocation={'Greenville, Ms'}
                />
            </Grid>
        </Grid>
        </>
    )
}

