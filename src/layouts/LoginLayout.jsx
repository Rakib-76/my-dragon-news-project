import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const LoginLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-4 sticky top-0 '>
                <Navbar></Navbar>
            </header>
            <main>
               <Outlet></Outlet>
            </main>
        </div>
    );
};

export default LoginLayout;