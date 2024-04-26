import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";

export const useAuth=createContext(null)
const AuthProvider = ({children}) => {

    const [loading,setLoading]=useState(false)
    const [user,setUser]=useState(null)


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)}

        
    useEffect(()=>{
        const stop = onAuthStateChanged(auth,(users)=>{
            setLoading(false)
            setUser(users)
        })
        return ()=>{stop()}
    },[])



    const updateUser=(name,image)=>{
        return updateProfile(auth.currentUser, {
            displayName:name ,
             photoURL:image,
          })
    }


    console.log(user);
    const authData={createUser,updateUser,login}
    return (
        <useAuth.Provider value={authData}>
            {children}
        </useAuth.Provider>
    );
};

export default AuthProvider;