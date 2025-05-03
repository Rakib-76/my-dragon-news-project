import React from 'react';
import swimming from '../assets/swimming.png';
// import class from '../assets/class.png'
import classes from '../assets/class.png';
import play from '../assets/playground.png';

const QZone = () => {
    return (
        <div className='bg-base-200 p-2'>
            <h1 className='text-accent font bold'>Q-zone</h1>
            <img src={swimming} alt="" />
            <img src={classes} alt="" />
            <img src={play} alt="" />
        </div>
    );
};

export default QZone;