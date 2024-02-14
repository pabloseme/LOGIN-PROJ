import { useState } from 'react'
import "./Formulario.css"
import { Loading } from '../Loading'


export function Formulario({setUser,setLoanding}){
    const[nombre,setNombre]=useState('')
    const[clave,setClave]=useState('')

    const[error,setError]=useState(false)

    

    const handleSubmit= (e) =>{
        e.preventDefault();
        const data={
            username: nombre,
            password: clave
        }


        if (nombre==="" || clave===""){
            setError(true)
            return 
        }
        
        setLoanding(true)
        setTimeout(()=>{
            setLoanding(false)
            setError(false)
            setUser([nombre])
        },5000)

        console.log('DAtos:',data)

         fetch('http://localhost:3000/api/users',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'                
              },             
              body: JSON.stringify(data)
         })
         .then(response=>response.json())
         .then(resul=>{console.log(resul)})
         .catch(error=>{console.log(error)})
        
        
        
    }
    

    return(
        <div>
            <h1>Login - Formulario</h1>
        <form className="formulario" onSubmit={handleSubmit}>
            <input 
             type="text" 
             value={nombre}
             onChange={e=>setNombre(e.target.value)}
            />
            <input 
            type="password"
            value={clave}
            onChange={e=>setClave(e.target.value)} />
            <button>Ingresar</button>
        </form>
        {error && <p>Todos los Campos son Obligatorios</p>}
        </div>
    )
}