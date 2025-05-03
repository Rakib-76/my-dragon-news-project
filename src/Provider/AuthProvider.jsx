import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// Here i creat a context and export 
export const AuthContext = createContext();
const auth = getAuth(app);
// Here the app is firebase config.js theke asche 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState("null");
    console.log(user);

    const creatUser = (email,password) =>{
        // this function get email ans password from register page 
        return createUserWithEmailAndPassword(auth,email,password)
        // here this function throw the auth email and password 
    };
// Here follow the documentation of firebase authentication
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    };

    const logOut = () =>{

        return signOut(auth);
    }

    // Here onAuthStateChange function use as a observer if i reload the page then it show me data.so it was a prevent data to remove when i use reload ;
    useEffect(() =>{
        // Here the onAUthStateChanged function two parameter one is auth another is a function 
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            // here the currentUser is by default parameter it must be used
            setUser(currentUser)
            // it grab my input data and show from firebase
        });
        return () =>{
            unSubscribe();
        };
    },[])

    const authData = {
        user,
        setUser,
        creatUser,
        logOut,
        signIn
        // Here auth data use for sharing anywhere
    };
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;