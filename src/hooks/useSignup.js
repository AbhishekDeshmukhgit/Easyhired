
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";

import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";


export const useSignup = () =>{
    const [error,setError]=useState(null)
    const [isPending,setIsPending]=useState(false)
    const [isCancelled,setIsCancelled]=useState(false)
    const {dispatch}=useAuthContext()

    const signup=async(email,password)=>{
        setError(null)
        setIsPending(true)

        try{
            //signup user
           const res= await createUserWithEmailAndPassword(auth,email,password)
            // console.log(res.user)
            if(!res)
            {
                throw new Error('Could not complete signup')
            }

            //add display name to user
            // await res.user.updateProfile({displayName})
            // await updateProfile(projectAuth.currentUser, { displayName });

            //dispatch login action
            dispatch({type:'LOGIN',payload:res.user})
            

            // setIsPending(false)
            // setError(null)
            if(!isCancelled)
            {
             setIsPending(false)
             setError(null)
            }
        }
        catch(err){
            // console.log(err.message)
            // setError(err.message)
            // setIsPending(false)
            if(!isCancelled)
            {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
            }
        }
    }

    
    useEffect(
        ()=>{
            return ()=>setIsCancelled(true)
        }
    ,[])

    return {signup,error,isPending}
}