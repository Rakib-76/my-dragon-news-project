import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div>
            <div className='flex items-center gap-4 bg-base-200 p-3'>
                <p className='bg-secondary text-base-100 p-3'>Latest</p>
               <Marquee className='flex gap-4  ' pauseOnHover={true} speed={60} >
               <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis saepe quis nihil recusandae architecto voluptatibus cum sunt vel perferendis beatae.</p>
               </Marquee>
            </div>
        </div>
    );
};

export default Latest;