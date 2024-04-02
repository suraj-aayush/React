import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let counter = 15 

const addValue = () =>{
  counter++; 
  console.log(`value added ${Math.random()}`);
}

  return (
    <>
      <h1>02 counter project</h1>
      <h2>counter value :5</h2>

      <button onClick={addValue}>Add</button>
      <br />
      <button>Sub</button>
    </>
  )
}

export default App
