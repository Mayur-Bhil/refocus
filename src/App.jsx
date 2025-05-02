import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'

function App() {
  

  return (
    <>
    <div className='bg-zinc-900 h-full w-full text-white font-["Satoshi variable"]'>
            <Navbar/>
            <Work/>
            <Stripes/>
            <Products/>
    </div>
     
    </>
  )
}

export default App
