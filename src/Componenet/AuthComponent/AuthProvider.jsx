import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";

export const useAuth=createContext(null)
const AuthProvider = ({children}) => {

    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    const userEmail=user?.email
    const userImage=user?.photoURL
    const userName=user?.displayName
    
    console.log(userEmail,userImage,userName);

    const googleProvider = new GoogleAuthProvider();






    const createUser=(email,password)=>{
        setLoading(true)
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const updateUser=(name,image)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName:name ,
             photoURL:image,
          })
    }


    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)}

    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
        

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        setLoading(true)
        const stop = onAuthStateChanged(auth,(users)=>{
            setLoading(false)
            setUser(users)
        })
        return ()=>{stop()}
    },[])



  


    const authData={createUser,updateUser,login,loading,logOut,user,googleLogin , userName ,userImage ,userEmail}
    return (
        <useAuth.Provider value={authData}>
            {children}
        </useAuth.Provider>
    );
};

export default AuthProvider;