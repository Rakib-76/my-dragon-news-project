import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {creatUser,setUser} = use(AuthContext)
    // here setUser used from auth provider and below its called with parameter user 
    // here Auth context called and creatuser distructure
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,password,email,photo);
        // here follow the documentation of firebase authentication 
        creatUser(email,password)
        .then ((result) =>{
            const user = result.user;
            // console.log(user);
            setUser(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
        // here creatUser function call and get two data email and password
    };

    return (
        <div className='flex justify-center mt-10 items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex justify-center py-4 ">
                <form className="card-body" onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        <label className="label">Your Name</label>
                        <input
                            type="text"
                            className="input  bg-gray-100 border-none"
                            name='name'
                            required
                            placeholder="Enter your name" />
                        <label className="label">Photo URL</label>
                        <input
                            type="text"
                            className="input bg-gray-100 border-none"
                            name='photo'
                            required
                            placeholder="Enter your photo url" />
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input  bg-gray-100 border-none"
                            name='email'
                            required
                            placeholder="Email" />
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input bg-gray-100 border-none"
                            name='password'
                            required
                            placeholder="Password" />
                        <div>Accept Term & Conditions</div>
                        <button
                            
                            type='submit'
                            className="btn bg-[#403f3f] mt-4 text-white">Register</button>
                        <p
                            className='font-bold text-center mt-4 text-accent'>Already Have An Account ? <Link to='/auth/login' className=' underline text-red-800 '>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;