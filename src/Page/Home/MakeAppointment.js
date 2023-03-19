import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center' style={{
            background:`url(${appointment})`
        }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-3 py-5'>
                <h3 className='text-xl text-primary font-bold py-4'>Appoinment</h3>
                <h2 className='text-white text-3xl '>Make an Appoinment Today</h2>
                <p className='text-white mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero pariatur aspernatur am nemo nam quis, quo ipsam doloremque dignissimos,pernatur am nemo nam quis, quo ipsam doloremque dignissimos,pernatur am nemo nam quis, quo ipsam doloremque dignissimos, aperiam maxime tempore blanditiis accusamus sequi!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;