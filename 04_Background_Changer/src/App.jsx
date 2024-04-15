import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("cyan")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

      <div className="flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 bg-white rounded-3xl ">
      

<button onClick={ ()=> setColor("red") }
 className="outline-1 px-4 rounded-xl px-2 py-3 shadow-xl"
          style={{backgroundColor :"red"}}
        > RED </button>

<button onClick={ ()=> setColor("green") }
className="outline-1 px-4 rounded-xl px-2 py-3 shadow-xl"
          style={{backgroundColor :"green"}}
        > GREEN </button>

<button onClick={ ()=>setColor("blue") }
className="outline-1 px-4 rounded-xl px-2 py-3 shadow-xl"
          style={{backgroundColor :"blue"}}
        > BLUE </button>

        </div>
      </div>
    </div>
  )
}

export default App
