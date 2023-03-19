import React from 'react';
import dentalImg from '../../assets/images/treatment.png'

const DentalTreat = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure className='lg:w-full'><img class='w-[320px] h-[400px]' src={dentalImg} alt="Album"/></figure>
          <div class="lg:w-[80%] card-body justify-center gap-4">
          <div>
             <h2 class="card-title">Exceptional Dental Care, on Your Terms</h2>
             <p>Lorem, excepturi dolore eaque vel, quasi atque adipisci
              Lorem, excepturi dolore eaque vel, quasi atque adipisci quasi atque adipisciquasi atque adipisci</p>
          </div>
          <div class="card-actions justify-start">
            <button class="btn btn-primary">Listen</button>
          </div>
          </div>
        </div>
    );
};

export default DentalTreat;
