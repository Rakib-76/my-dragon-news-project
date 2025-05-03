import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn} = use(AuthContext)
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch((error) =>{
            const errorCode = error.code ;
            const errorMessage = error.message;
            alert(errorCode,errorMessage);
        })

    }
    return (

        <div className='flex justify-center mt-10 items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex justify-center py-4 ">
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input 
                        name="email"
                        type="email" className="input  bg-gray-100 border-none" placeholder="Email" />
                        <label 
                        
                        className="label">Password</label>
                        <input 
                        name="password"
                        type="password" className="input bg-gray-100 border-none" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn bg-[#403f3f] mt-4 text-white">Login</button>
                        <p className='font-bold text-center mt-4 text-accent'>Dont’t Have An Account ? <Link to='/auth/register' className=' underline text-red-800 '>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;