import React from 'react';
import Banner from './Banner';
import DentalTreat from './DentalTreat';
import Info from './Info';
import Services from './Services';
// import DentalTreat from './DentalTreat';

const Home = () => {
    return (
        <div className='px-12'>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
          <DentalTreat></DentalTreat>
          {/* <DentalTreat></DentalTreat> */}
        </div>

    );
};

export default Home;