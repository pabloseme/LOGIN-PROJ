
export function Home ({user,setUser}) {

    const handLogout =()=>{
        setUser([]);
    }
    return (
        <div>
            <h1>Home - Bienvenido {user}</h1>
            <button onClick={handLogout}>Cerrar Sesión</button>
        </div>
    )
}