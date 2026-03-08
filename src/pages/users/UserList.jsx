import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";
import { deleteUser } from "../../services/AuthService";
import Swal from "sweetalert2";

function UserList() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const getUsers = async () => {
        const response = await fetch('https://fakestoreapi.com/users');
        const apiUsers = await response.json();

        const extraUsers = JSON.parse(localStorage.getItem("extraUsers")) || [];

        setUsers([...apiUsers, ...extraUsers]);
    };
    
    const handleDelete = async (id) => {

        const result = await Swal.fire({
            title: '¿Deseas eliminar este usuario?',
            text: 'Esta acción no se puede deshacer',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'No, cancelar'
        });
        if (result.isConfirmed) {
            await deleteUser(id);
            console.log("Usuario eliminado con id: ", id);
             setUsers(users.filter(user => user.id !== id));
            Swal.fire("Eliminado", "El usuario fue eliminado", "success");
            
        }
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div className="container">
            <h1>User List</h1>
                <div className="crear-usuario">
                    <Button type="primary" text="Crear Usuario" action={() => navigate("/users/create")} />
                </div>
                
                <Table 
                users={users}
                 onDelete={handleDelete} />
            
        </div>
    )
}

export default UserList;