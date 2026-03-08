import { Outlet } from "react-router-dom";
import Button from "../../components/Button";
import { useAuth } from "../../security/authContext";

function Users(){
        const { logout } = useAuth();
    
    return(
        <div className="container">
            <h1>Usuarios</h1>
            <div className="logout">
                    <Button
                    type="secundary"
                        text="⍈"
                        action={logout}
                    /></div>
            <div>
                <Outlet/>
            </div>
            
        </div>
    )
}
export default Users;