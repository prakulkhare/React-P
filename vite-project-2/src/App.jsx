import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [counter, setCounter] = useState(15)
  // let counter = 15
  const addValue = () => {
    
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
  const subtractValue = () => {

    setCounter(counter - 1)
  } 

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}> Increment Value{counter}</button>
      <br />
      <button onClick={subtractValue}> Decrement Value</button>

    </>
  )
}

export default App
