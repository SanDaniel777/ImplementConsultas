import { useNavigate, Link } from "react-router-dom";
import Button from "../components/Button";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Home</h1>
            <br />
            <h3>Inicia sesión para continuar</h3>
            <Button type="primary" 
                text="Iniciar Sesión" 
                action={() => navigate("/login")} 
            />
        </div>
    );
}

export default Home;