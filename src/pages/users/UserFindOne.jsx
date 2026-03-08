import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UserFindOne() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const getUser = async () => {

        const response = await fetch(`https://fakestoreapi.com/users/${id}`);
        const data = await response.json();

        setUser(data);
    }

    useEffect(() => {
        getUser();
    }, [id])

    if (!user) {
        return <p>Cargando...</p>
    }

    return (

        <div className="container">
            <h1>User Detail</h1>

            <Button
                    text="Regresar"
                    action={() => navigate("/users/list")}
                />

            <div className="card">
                <p>ID: {user.id}</p>
                <p>
                    Name: {user.name.firstname} {user.name.lastname}
                </p>

                <p>Email: {user.email}</p>

                <p>Phone: {user.phone}</p>
            </div>



        </div>
    )
}

export default UserFindOne;