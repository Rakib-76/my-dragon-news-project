import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center space-y-5'>
                <img src={logo} alt="image" />
                <p className='text-2xl text-accent'>Journalism Without Fear and Favour</p>
                <p className='font-semibold'>{format(new Date(),"EEEE, MMMM MM, yyyy")}</p>  
            </div>
        </div>
    );
};

export default Header;