import React from 'react';
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
        <div className='px-12'>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
          <DentalTreat></DentalTreat>
          <MakeAppointment></MakeAppointment>
          <Testimonials></Testimonials>
          <ContactUs></ContactUs>
        </div>

    );
};

export default Home;