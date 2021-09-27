import React from 'react';
import MainContent from '../Components/LandingPage/MainContent/MainContent';
import Navbar from '../Components/LandingPage/Navbar/Navbar';
import UserNavbar from '../Components/userNavbar/userNavbar';
import SecondaryContent from '../Components/LandingPage/SecondaryContent/SecondaryContent';
import ThirdContent from '../Components/LandingPage/TertiaryContent/TertiaryContent';
import Footer from '../Components/LandingPage/Footer/Footer';
import {Divider} from '@mui/material';
import { useAuth } from '../context/AuthContext';

export default function LandingPage() {
  const {currentUser} = useAuth();
  return (
    <>
        {currentUser ? <UserNavbar /> : <Navbar />}
        <MainContent />
        <Divider />
        <SecondaryContent />
        <ThirdContent />
        <Footer />
    </>
  );
}
