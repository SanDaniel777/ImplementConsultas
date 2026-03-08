const API = "https://fakestoreapi.com/auth/login";


const loginService = async (username, password) => {
    const response = await fetch(API,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

if (!response.ok) {
    return null;
}

    const data = await response.json();
    return data;
}

export default loginService;