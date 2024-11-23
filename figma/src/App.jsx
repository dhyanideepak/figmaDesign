import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/TopCategory'
import Design from './components/Design'
import Card from './components/Card'

import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Category/>
    <Design/>
    <Card/>
    

     
      
    </>
  )
}

export default App
