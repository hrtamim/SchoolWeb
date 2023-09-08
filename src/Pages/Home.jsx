import React,{Fragment} from 'react'
import Header from '../Components/Header/Header';
import HeroSection from '../Components/Hero-Section/HeroSection';
import About from '../Components/About/About'
import Newsletter from '../Components/Newsletter/Newsletter';
import Footer from '../Components/Footer/Footer';
import ChooseUs from '../Components/ChooseUs/ChooseUs';

const Home = () => {
  return (
    <Fragment>
    <Header/>
    <HeroSection/>
    <About/>
    <ChooseUs/>
    <Newsletter/>
    <Footer/>

  </Fragment>
  );
};

export default Home