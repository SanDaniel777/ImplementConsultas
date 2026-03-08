import { useState } from "react"
import Button from "./components/Button"
import './components/components-style.css'

function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <>

      {
        isLoggedIn ? ( <Button text= 'Cerrar sesion'
        action={()=> {
          alert('Cerrando sesion')
          setIsLoggedIn(false)}}
          type="primary"
        />
        ):(<Button text= 'Iniciar sesion'
        action={()=> {
          alert('Iniciando sesion')
          setIsLoggedIn(true)}}
          type="secondary"
        />)
      }
      {
        isLoggedIn &&(
          <h1>bienvenido</h1>
        )
      }


      <br /><br />

      <Button text="Click me" action={()=>alert('Click me')}/>
      <Button text="Pls dont click me" action={()=>alert('Que no me piques wey')}/>
      <Button/>
      <Button/>
    </>
  )
}

export default App
