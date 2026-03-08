import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../security/authContext";
import Swal from "sweetalert2";
import Input from "../components/Input";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

        if (!username || !password) {
            Swal.fire(
                "Error",
                "Todos los campos son obligatorios",
                "error"
            )
            return;
        }


        const success = await login(username, password)
        if (success) {

            Swal.fire(
                "Success",
                `Iniciado correctamente`,
                "success"
            )
            navigate("/dashboard")
        } else {
            Swal.fire(
                "Error",
                "Credenciales incorrectas",
                "error"
            )
        }

    }


    return (



        <div className="login">
            <h1>Login</h1>
            <div>
                
                <Input type="text" placeholder="userName"
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <Input type="password" placeholder="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <Button type="primary" text="Iniciar Sesión "
                action={handleLogin} />
        </div>
    )

}
export default Login;