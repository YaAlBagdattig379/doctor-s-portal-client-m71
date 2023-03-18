import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitenting from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {_id:1,
        name:"Fluoride TreatMent",
        description:"",
        img: fluoride
        },
        {_id:2,
        name:"Cavity Filling",
        description:"",
        img: cavity
        },
        {_id:3,
        name:"Teeth Whitening",
        description:"",
        img: whitenting
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
               <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
               <h2 className='text-4xl font-bold '>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-3  md:grid-cols-3 gap-10'>
                {
                    services.map(service=> <Service 
                        key={service._id}
                        service={service}
                    ></Service>)
                }
                <Service></Service>
            </div>
        </div>
    );
};

export default Services;