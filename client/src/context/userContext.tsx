import React, { useContext, useState, ReactNode, useEffect, createContext } from 'react'
import firebase from 'firebase/app';
import { Auth, User as FirebaseUser, UserCredential } from "firebase/auth"
import { createUserWithEmailAndPassword } from "firebase/auth"


export const CheckRegistration= () =>{
    useEffect(() => {
        let token = sessionStorage.getItem("Token");
        // If there is no token, redirect to register page
        if (!token) {
          // router.push("/register");
        }
      }, []);
}


type ContextType = {
    email: string | null;
    signup: (email: string, password: string) => Promise<UserCredential>|null;
}

export const AuthContext = createContext<ContextType>({
    currentUser: null,
    signup: (email:string, password: string)=>{
        return null;
    }
})