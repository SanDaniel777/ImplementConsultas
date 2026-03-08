const API = "https://fakestoreapi.com/users"

export const deleteUser = async (id) =>{
    const res = await fetch(`${API}/${id}`,{
        method:"DELETE"
    })
    return await res.json();
}

export const createUser = async (user)=>{
    const res = await fetch(API,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })

    return await res.json()
}