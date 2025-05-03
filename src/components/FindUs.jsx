import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div className='mt-5 mb-5'>
            <h1 className='font-bold text-accent mb-5'>Find Us on</h1>
            <div className="join join-vertical w-full">
                <button className="btn join-item justify-start text-accent bg-base-100"> <FaFacebook></FaFacebook>Facebook</button>
                <button className="btn join-item justify-start text-accent  bg-base-100"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item justify-start text-accent  bg-base-100"> <FaInstagram></FaInstagram>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;