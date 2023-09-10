import React,{Fragment} from 'react'
import HeroSection from '../Components/Hero-Section/HeroSection';
import About from '../Components/About/About'
import Newsletter from '../Components/Newsletter/Newsletter';
import ChooseUs from '../Components/ChooseUs/ChooseUs';
const Home = () => {
  return (
    <Fragment>
    

    <HeroSection/>
    <About/>
    <ChooseUs/>
    <Newsletter/>
  

  </Fragment>
  );
};

export default Home