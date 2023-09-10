import React,{Fragment} from 'react'
import Header from '../Components/Header/Header';
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer';
// import ChooseUs from '../Components/ChooseUs/ChooseUs';
import { Routes,Route } from "react-router-dom";
import Notice from '../Components/Notce/Notice';
import Home from '../Pages/Home';
import Privacy from '../Components/Privacy/Privacy';
import Terms from '../Components/Terms/Terms';
import Contact from '../Components/Contact/Contact';
import Officials from '../Components/Officials/Officials';
import Assistant from '../Components/Assistant';



const AllRoutes = () => {
  return (
    <Fragment>
    <Header/>
<Routes>
  <Route path='/' element ={<Home/>}/>
  <Route path='/About' element ={<About/>}/>
  <Route path='/Notice' element ={<Notice/>}/>
  <Route path='/Privacy_policies' element ={<Privacy/>}/>
  <Route path='/Terms_of_Services' element ={<Terms/>}/>
  <Route path='/Contact' element ={<Contact/>}/>
  <Route path='/Officials' element ={<Officials/>}/>
  <Route path='/Assistant' element ={<Assistant/>}/>
</Routes>

    <Footer/>

  </Fragment>
  );
};

export default AllRoutes;