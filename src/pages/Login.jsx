import { useState } from "react";
import Button from "../components/Button";  
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/authContext";




function Login(){
    const navigate = useNavigate();
    const {login}= useAuth();
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');


    const handleLogin= () => {
        if(username=== ''){
            alert('Please enter de username');
            return;
        }
        if(password=== ''){
            alert('Please enter de password');
            return;
        }

        alert(`Username: ${username} and Password: ${password}`)
        if(login(username,password)){
            navigate('/dashboard')
        }else{
            alert('Invalid credentials')
        }
        navigate('/dashboard')
    }

    return(
        <div>
            <h1>Login</h1>
            <div>
                <input type="text" placeholder="UserName"
                onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <input type="text" placeholder="Password" 
                onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <br />
            <Button text="Iniciar Sesion"
            action={handleLogin}
            />
        </div>

    )
}
export default Login;