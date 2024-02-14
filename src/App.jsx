
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Formulario } from './Formulario'
import {Home} from './Home'
import { useState } from 'react'
import { Loading } from './Loading'



function App() {
  const[user,setUser]=useState([])
  const[loading,setLoanding]=useState(false)
  
  if(loading){
    return(<Loading/>)    
  }else{
    return (
      <>
        <div>
          {
            user.length>0 
            ? <Home user={user}   setUser={setUser} /> 
            : <Formulario setUser={setUser} setLoanding={setLoanding}/>     
          }           
           
        </div>
        
      </>
    )
  }
  
}

export default App
