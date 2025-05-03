import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const handleLogout = ()=>{
        console.log("logout");
        logOut().then(() => {
            // here the follow the log out documentation from firebase authentication
            alert("logged out successfully")
          }).catch((error) => {
           console.log(error);
          });
    };
    const { user ,logOut} = use(AuthContext);
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>{user && user.email}</div>
                <div className='space-x-3 text-accent font-semibold'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/career'>Career</NavLink>
                </div>
                <div className='flex gap-2'>
                    <img src={userIcon} alt="" />

                    {
                        user ? <button 
                        onClick={handleLogout}
                        className='btn btn-primary px-10'>LogOut</button> : <Link to='/auth/login'> <button className='btn btn-primary px-10'>Login</button></Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;