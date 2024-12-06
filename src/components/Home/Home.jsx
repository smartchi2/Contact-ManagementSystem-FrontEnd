import React from 'react'
import Navbar from '../Navbar';
import Hero from '../hero';
import Companies from '../companies';
import Services from '../Services';
import Achivement from '../Achivement';
import Offers from '../Offers';
import FeedBack from '../FeedBack';
import Community from '../community';
import Footer from '../Footer';


const Home = () => {
    return(
        <>         
      <Navbar />
      <Hero/>
      <Companies />
      <Services />
      <Achivement />
      <Offers />
      <FeedBack />
      <Community /> 
     
        </> 
    )
}
export default Home;