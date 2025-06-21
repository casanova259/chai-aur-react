import { useState } from 'react'

function App() {

  const [color,setColor]=useState("olive")

  return (
  
 <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className="flex justify-center items-center pt-16">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          MANIK SHARMA
        </h1>
      </div>
  </div>
  )
}

export default App
