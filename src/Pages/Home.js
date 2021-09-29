import React, { useEffect, useState } from 'react';
import MainCard from '../Components/mainCard/mainCard';
import {
    Grid, Typography,
} from '@mui/material';
import UserNavBar from '../Components/userNavbar/userNavbar';
import boatCardImage from '../images/boatpic.jpg';
import doggo from '../images/doggo.JPG';
import {getUserByUserId, getUserByUserName} from '../services/firebase/firebase';
import { useAuth } from '../context/AuthContext';
const description = "Contrary to popular belisdfsdfsdfsdfsdfsdfs sdfsd s sdf sd sdf sdf sfd sdfsdfsd sdfsdfsd ef, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one"

// card takes
// username, userPhoto, displayedImage, description, photoLocation


// call api to read currentUser's following array
// forEach in the array and grab their last image
// while grabbing their last image/userInfo push that into a seperate array
//  return this array of follwed accounts last images + their respective account info's
// map over this new array here


export default function Home () {
    const [followedAccounts, setFollowedAccounts] = useState();
    const [currentList, setCurrentList] = useState();
    const [loading, setLoading] = useState();
    const { currentUser } = useAuth();

    async function getCurrentUserDashboardImages() {
        let newArray = [];
        try {
            getUserByUserId(currentUser.uid).then((item) => (
                item[0].following.forEach((item) => {
                    getUserByUserId(item.user).then((item) => {
                        item.map((item) => {
                           newArray.push(item)
                        })
                        setCurrentList(newArray);
                        setLoading(false)
                    })
                })
                
                // getUserByUserId(item[0].following).then((item) => (
                //     console.log(item)
                // ))
            ))

            
        } catch {
            console.log('error')
        }
        console.log(currentList)
        
    }
    


    useEffect(() => {
        setLoading(true)
        let response = getCurrentUserDashboardImages();

        return response;
    }, []);

    return (
        <>
        <UserNavBar />
        <Grid justifyContent="center" flexDirection="column" container lg={12} sx={{bgcolor: 'primary.dark', minHeight: '100vh'}}>
            <Grid item lg={12}>
                {!loading && currentList ? 
                // <h1 color="secondary.main">hi</h1>
                currentList.map((user) => (
                <MainCard 
                    username={user.username}
                    userPhoto={doggo}
                    displayedImage={user.photos[0].url}
                    description={user.photos[0].description}
                    photoLocation={user.photos[0].date}
                    uid={user.uid}
                />
                ))
                : <Typography color="secondary">Loading ya stuffz . . .</Typography> }
            </Grid>
        </Grid>
        </>
    )
}
