import { useState } from "react";
import { createUser } from "../../services/AuthService";
import Swal from "sweetalert2";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
function CreateUser() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        if (e) e.preventDefault();


        if (!name || !email || !phone || !city) {
            Swal.fire("Error", "Todos los campos son obligatorios", "error");
            return;
        }

        if (!name) {
            Swal.fire("Error", "El nombre es obligatorio", "error");
            return;
        }


        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailRegex.test(email)) {
            Swal.fire("Error", "El email no es válido", "error");
            return;
        }
        if (!phone) {
            Swal.fire("Error", "El telefono es obligatorio", "error");
            return;
        }
        if (!city) {
            Swal.fire("Error", "La ciudad es obligatoria", "error");
            return;
        }

        if (isNaN(phone)) {
            Swal.fire("Error", "El teléfono debe contener solo números", "error");
            return;
        }
        const user = {
            name: {
                firstname: name,
                lastname: ""
            },
            email,
            phone,
            address: {
                city
            }
        };

        const newUser = await createUser(user);

        console.log("Usuario creado:", newUser);

        const extraUsers = JSON.parse(localStorage.getItem("extraUsers")) || [];

        extraUsers.push({
            ...user,
            id: Math.floor(Math.random() * 1000)
        });

        localStorage.setItem("extraUsers", JSON.stringify(extraUsers));

        Swal.fire("Usuario creado", "El usuario fue creado exitosamente", "success");

        navigate("/users/list");
    };

    return (
        <div className="card">         
        
        <div className="cerrar-usuario">
            <Button
            text="Regresar"
            action={() => navigate("/users/list")} 
            />
        </div>
        
       
            <h2>Crear Usuario</h2>

            <form >
                <Input placeholder="Nombre completo" value={name} onChange={(e) => setName(e.target.value)} />
                <Input placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Número de teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <Input placeholder="Ciudad" value={city} onChange={(e) => setCity(e.target.value)} />
                <br />

                <div className="menu">
                    <Button
                        type="primary"
                        text="Crear Usuario"
                        action={handleSubmit}
                    />
                </div>




            </form>
        </div>
    )
}
export default CreateUser;