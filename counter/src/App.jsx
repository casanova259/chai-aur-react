import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //useState:state ko change krna pdega toh use state ka use hoga 
  const [counter,setCounter]=useState(15);


 // let counter=15

  const addvalue=()=>{
    console.log('clicked! sop counter is',counter);
   //counter=counter+1;
    setCounter(counter+1);
  }

  const removevalue=()=>{
    setCounter(counter-1);
  }
  
  return (
    <>
      <h1>Manik Aur React</h1>

      <h2>Counter value :{counter}</h2>

      <button onClick={addvalue}> Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
