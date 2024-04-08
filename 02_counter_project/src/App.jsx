import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCount] = useState(10)

  const increase = () =>{
    setCount(counter +1)
    console.log("clicked " + Math.random());
  }

  const decrease = () =>{
    setCount(counter - 1)
    console.log(" decreased " + Math.random());
  }


  return (
    <>
      
    <h2>Counter Project</h2>
    <h4>Counter Value : {counter} </h4>

    <button
      onClick={increase}
    > Increase </button>
    <br /> 
    <button
      onClick={decrease}
    > Decrease </button>

    </>
  )
}

export default App
