import { Outlet, Navigate} from "react-router-dom"


function ProtectedRoutes({isALLowed}){
    if(!isALLowed){
        return <Navigate to='login'/>
    }
    return <Outlet/>
}

export default ProtectedRoutes;