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
import Students from '../Components/Students';
import Links from '../Components/Links';
import Commitee from '../Components/Commitee';
import Independence from '../Components/Independence';
import LogIN from '../Components/LogIN/LogIN';
import Blog from '../Components/Blog/Blog';




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
  <Route path='/Students' element ={<Students/>}/>
  <Route path='/Links' element ={<Links/>}/>
  <Route path='/Commitee' element ={<Commitee/>}/>
  <Route path='/Independence' element ={<Independence/>}/>
  <Route path='/login' element ={<LogIN/>}/>
  <Route path='/Blog' element ={<Blog/>}/>
</Routes>

    <Footer/>

  </Fragment>
  );
};

export default AllRoutes;