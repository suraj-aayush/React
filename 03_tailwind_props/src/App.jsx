import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// ALWAYS import in Capital letter...e.g => Card, Prop, Demo, etc
import Card from './components/card'

function App() {
  
// OBJECT DEFINED AND PASSED
  let obj = {
    name:"ipad",
    desc:"BRAND NEW IPAD PRO",
    
  }

// ARRAY DEFINED AND PASSED  
  let newArr = [1,2,3,4]

  return (
    <>
        <h1 className='bg-green-400 text-white p-2 mt-2 rounded-2xl'> Tailwind integration </h1>

        <figure class=" mt-3 md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://th.bing.com/th/id/OIP.KDYp0bjlA6J3QqrBIWmtTwHaFj?rs=1&pid=ImgDetMain" alt="" width="384" height="512"/>
  <div class="pt-6 m text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
        </figure> 
{/*  C A R D  */}
 
{/*                                PASSING VALUES IN PROPS                                                 */}
    <Card username ="aayush" myobj = {obj}  array={newArr} />

    <Card username = "ram" />

    <Card username="bOKA"/>

    </>
  )
}

export default App
