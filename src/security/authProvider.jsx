import { useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import loginService from "../services/userService";


function AuthProvider({ children }) {
    const [session, setSession] = useState(null)

    useEffect(() => {
        const session = localStorage.getItem('session')

        if (session) {
            setSession(JSON.parse(session))
        }
    }, [])

    const login = async (username, password) => {

        const data = await loginService(username, password);

        if (!data) {
            return false;
        }

        localStorage.setItem("token", data.token);
        setSession(true);

        return true;
    };
    const logout = () => {
        setSession(null)
        localStorage.removeItem('session')
    }


    return (
        <AuthContext.Provider value={{ session, login, logout, isLoggedIn: !!session }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
