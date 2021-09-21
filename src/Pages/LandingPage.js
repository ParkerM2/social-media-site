import React from 'react';
import MainContent from '../Components/LandingPage/MainContent/MainContent';
import Navbar from '../Components/LandingPage/Navbar/Navbar';
import SecondaryContent from '../Components/LandingPage/SecondaryContent/SecondaryContent';
import Footer from '../Components/LandingPage/Footer/Footer';
import {Divider} from '@mui/material';
export default function LandingPage() {
    
  return (
    <>
        <Navbar />
        <MainContent />
        <Divider />
        <SecondaryContent />
        <Footer />
    </>
  );
}
