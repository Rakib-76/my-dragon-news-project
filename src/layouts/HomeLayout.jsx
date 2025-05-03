import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Latest from '../components/Latest';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homeLayout/leftAside';
import RightAside from '../components/homeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            <section className='w-11/12 mx-auto mt-3'>
                <Latest></Latest>
            </section>
            <nav className='w-11/12 mx-auto mt-3'>
                <Navbar></Navbar>
            </nav>
            </header>
            {/* here *:border star and colon use korle parent tar sob chiled ke alada kore style diye dibe upore ami border use korchi */}
            <main className='w-11/12 mx-auto space-x-5 grid grid-cols-12'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>

                 <aside className='col-span-3 sticky top-0 h-fit'>
                   <RightAside></RightAside>
                </aside>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;