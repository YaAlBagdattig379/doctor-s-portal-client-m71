import React from 'react';
import dentalImg from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const DentalTreat = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-[200px]">
          <figure className='lg:w-full'><img className='w-[320px] h-[400px]' src={dentalImg} alt="Album"/></figure>
          <div className="lg:w-[80%] card-body justify-center gap-4">
          <div>
             <h2 className="card-title text-4xl">Exceptional Dental Care, on Your Terms</h2>
             <p>Lorem, excepturi dolore eaque vel, quasi atque adipisci
              Lorem, excepturi dolore eaque vel, quasi atque adipisci quasi atque adipisciquasi atque adipisci</p>
          </div>
          <div className="card-actions justify-start">
           <PrimaryButton>Listen</PrimaryButton>
          </div>
          </div>
        </div>
    );
};

export default DentalTreat;
