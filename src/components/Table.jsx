import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Table({ users = [], onDelete }) {

    const navigate = useNavigate();
    return (
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Nombre completo</th>
                    <th>Email</th>
                    <th>Ubicación</th>
                    <th>Telefono</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
   
                {users.map(user=>(
                    
                    <tr key={user.id}>

                        <td>{user.id}</td>

                        <td>{user?.name?.firstname} {user?.name?.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user?.address?.city}</td>
                        <td>{user.phone}</td>
                        <td>
                            <Button text="Ver" action={()=>navigate(`/users/${user.id}`)}/>
                                <Button text="Eliminar" action={() => onDelete(user.id)}/>
                        </td>
                    </tr>

                ))}
            </tbody>
        </table>
    );
}

export default Table;