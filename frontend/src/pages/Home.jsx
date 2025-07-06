import React from 'react';
import Navbar from '../components/ui/Nabar'; // Import your Navbar component
import HeroHome from '../components/ui/HeroHome';
import FeatureHome from '../components/ui/FeatureHome';
import PopularPostHome from '../components/ui/PopularPostHome';
import AboutMeHome from '../components/ui/AboutMeHome';

const Home = () => {
  return (
    <>
      <HeroHome />
      <FeatureHome />
      <PopularPostHome />
      <AboutMeHome />
    

    </>
  );
};
export default Home;