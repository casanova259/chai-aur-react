import React,{useState,useContext} from 'react'
import UserContext from '../context/userContext'

function Login() {

    const [username,setName]=useState('');
    const [password,setPassword]=useState('');

    const {setUser}=useContext(UserContext);
    //ye kaha se aayaa provider m humne set user pass kiya taki hum dusre components se data retrieve kr paye

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        type='text' 
        value={username}
        placeholder='username'
        onChange={(e)=>setName(e.target.value)}
       />
       {" "}
        <input
         type='text'
         value={password}
          placeholder='password'
          onChange={(e)=>setPassword(e.target.value)}
          />

          <button onClick={handleSubmit}>
            Submit
          </button>
    </div>
  )
}

export default Login