import React from 'react';

const Review = ({review}) => {
    return (
       <div class="card lg:max-w-lg bg-base-100 shadow-xl">
         <div class="card-body">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, illo r quas nihil optio eum tempora esse quia eius omnis sed blanditiis odit nisi.</p>
            <div class="flex items-center">
               <div class="avatar">
                    <div class="w-[75px] rounded-full ring ring-primary ring-offset-base-100 mr-3">
                      <img src={review.img} alt=''/>
                    </div>
                </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
            </div>
         </div>
        </div> 
    );
};

export default Review;
