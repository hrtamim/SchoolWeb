import React,{Fragment} from 'react'
import Header from '../Components/Header/Header';
import HeroSection from '../Components/Hero-Section/HeroSection';
import About from '../Components/About/About'
import Newsletter from '../Components/Newsletter/Newsletter';
import Footer from '../Components/Footer/Footer';
const Home = () => {
  return (
    <Fragment>
    <Header/>
    <HeroSection/>
    <About/>
    <Newsletter/>
    <Footer/>

  </Fragment>
  );
};

export default Home