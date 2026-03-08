import { useState } from "react";
import { AuthContext } from "./authContext";

function AuthProvider({children}){
    
    const[session, setSession]= useState (null)
    const  login = (username, password) => {
        if(username === 'admin' && password === '1234'){
            setSession({username})
            return true
        }else{
            return false
        }

    }

    const logout = () => {
        setSession(null)
    }

    
    return(
        <AuthContext.Provider value = {{session,login, logout, isLoggedIn: !!session}}>
        {children}    
        </AuthContext.Provider>
    )
}
export default AuthProvider;

