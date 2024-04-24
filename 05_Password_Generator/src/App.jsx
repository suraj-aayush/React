import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = ()=>
  {

  }

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500">

      <h1 className="text-center text-4xl my-3 ">Password Generator</h1>

      <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">

      <input type="text" value={password} className="outlie-none w-full py-1 px-2" placeholder='password' readOnly/>


<button className='outline-none bg-cyan-600 rounded-xl text-white px-2 py-2 shrink-0' > COPY
 </button>

      </div>

<div className='flex text-sm gap-x-2'>
  <div className='flex item-center gap-x-1'>
    <input type="range" min={8} max={20} value={length} className='cursor-pointer'/>
    <label> LENGTH: {length} </label>
    
    <input type="text" />
  </div>
</div>

      </div>


    </>
  )
}

export default App
