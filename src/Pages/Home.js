import React, { useEffect } from 'react';
import MainCard from '../Components/mainCard/mainCard';
import {
    Grid,
} from '@mui/material';
import UserNavBar from '../Components/userNavbar/userNavbar';
import boatCardImage from '../images/boatpic.jpg';
import doggo from '../images/doggo.JPG';
import {getUserByUserId, getUserByUserName} from '../services/firebase/firebase';
const description = "Contrary to popular belisdfsdfsdfsdfsdfsdfs sdfsd s sdf sd sdf sdf sfd sdfsdfsd sdfsdfsd ef, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one"

// card takes
// username, userPhoto, displayedImage, description, photoLocation


// call api to read currentUser's following array
// forEach in the array and grab their last image
// while grabbing their last image/userInfo push that into a seperate array
//  return this array of follwed accounts last images + their respective account info's
// map over this new array here


export default function Home () {


    useEffect(() => {
      
        getUserByUserId('u6v8fIeensfONGQTyPMIxWwmeps1').then((item) => (console.log(item)))
    
       

       
    });

    return (
        <>
        <UserNavBar />
        <Grid justifyContent="center" container lg={12} sx={{bgcolor: 'primary.dark', minHeight: '100vh'}}>
            <Grid item lg={12}>
                <MainCard 
                    username={"parker manning"}
                    userPhoto={doggo}
                    displayedImage={boatCardImage}
                    description={description}
                    photoLocation={'Greenville, Ms'}
                    uid={'u6v8fIeensfONGQTyPMIxWwmeps1'}
                />
            </Grid>
        </Grid>
        </>
    )
}

