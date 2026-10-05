import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [infoCal, setInfoCal] = useState({
    numero1: 0,
    numero2: 0,
  })

  const suma = (a, b) => {
    return a + b;
  }

  const capturaDatos = (e) => {
    const { name, value } = e.target;
    setInfoCal({
      ...infoCal,
      [name]: value === '' ? 0 : Number(value)
    });
    console.log(`${name}:${value}`)
  }

  const envioDatos = (e) => {
    e.preventDefault();
    console.log(infoCal)
  }

  const alerta = () => {
    return alert(`Se envio el correo con los datos de ${setInfo}`);
  }
  return (
    <>
      <h1>Pruebas con test
      </h1>
      <h2>La respuesta es {suma(9, 0)} </h2>
      <form onSubmit={envioDatos} style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
        <label htmlFor="numero1">Ingrese primer numero </label>
        <input type="text" name='numero1' placeholder='Ingrese su numero' style={{ width: '50%' }} onChange={capturaDatos} />
        <label htmlFor="numero2">Ingrese segundo numero </label>
        <input type="text" name='numero2' placeholder='Ingrese su numero' style={{ width: '50%' }} onChange={capturaDatos} />
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default App
