import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let anOBJ={
    username:"maniksharma",
    age:21
  }

  let newARR=[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400  text-black p-4'>MAnik</h1>
      <Card username="MANIK"/> 
      <Card username="KHUHSI"/>
    </>
  )
}

export default App
