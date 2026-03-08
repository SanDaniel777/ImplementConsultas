import { useAuth } from "../security/authContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
function Dashboard() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    return (
        <div className="container">
            <header className="dashboard-titulo">
                <h1>Dashboard</h1>
            </header>

            <div className="menu">
                <Button
                    type="primary"
                    text="Ver Usuarios"
                    action={() => navigate("/users/list")}
                />
                <div className="cerrar-sesion">
                    <Button
                    type="secundary"
                        text="Cerrar Sesión"
                        action={logout}
                    /></div>
            </div>

        </div>
    )
}

export default Dashboard;