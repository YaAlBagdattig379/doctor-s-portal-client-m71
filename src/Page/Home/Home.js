import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import DentalTreat from './DentalTreat';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
// import DentalTreat from './DentalTreat';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
          <DentalTreat></DentalTreat>
          <MakeAppointment></MakeAppointment>
          <Testimonials></Testimonials>
          <ContactUs></ContactUs>
          <Footer></Footer>
        </div>

    );
};

export default Home;