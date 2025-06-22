import { useActionState, useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [Password, SetPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, SetNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);


  //ref hook
  const passwordRef=useRef(null)

  const CopyToclipBoard=useCallback(()=>{
    passwordRef.current?.select  
    window.navigator.clipboard.writeText(Password)
  },[Password])


  const PasswordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numberAllowed) str += "1234567890";
    if (CharAllowed) str += "!@#${}():;/.,|";

    //Method for generating the password
    for (let i = 1; i <= length; i++) {
      //generating a random index
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    SetPassword(pass);
  }, [length, numberAllowed, CharAllowed, SetPassword])


  useEffect(()=>{
    PasswordGenerator()
  },[length,numberAllowed,CharAllowed]) 

  return (
    <>
      <div className='bg-slate-900 min-h-screen flex items-center justify-center p-4'>
        <div className='bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700 max-w-md mx-auto'>
          
          <h2 className='text-2xl font-bold text-white mb-6 text-center'>Password Generator</h2>
          
          <div className='flex gap-2 mb-6'>
            <input type="text"
              value={Password}
              className='bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white font-mono text-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              placeholder='Generated password'
              readOnly
              ref={passwordRef}
            />
            <button onClick={CopyToclipBoard}
            className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200'>
              Copy
            </button>
          </div>

          <div className='mb-6'>
            <div className='flex justify-between items-center mb-3'>
              <label className='text-slate-300 text-sm font-medium'>Length</label>
              <span className='text-blue-400 font-mono text-sm bg-slate-700 px-2 py-1 rounded'>{length}</span>
            </div>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
          </div>

          <div className='space-y-3 mb-6'>
            <h3 className='text-slate-300 text-sm font-medium'>Include:</h3>
            
            <div className='flex items-center gap-3'>
              <input
                type="checkbox"
                checked={numberAllowed}
                id='number-input'
                className='w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-2'
                onChange={() => {
                  SetNumberAllowed((prev) => !prev)
                }}
              />
              <label htmlFor='number-input' className='text-slate-300 text-sm font-medium cursor-pointer'>Numbers</label>
            </div>

            <div className='flex items-center gap-3'>
              <input
                type="checkbox"
                checked={CharAllowed}
                id='character-input'
                className='w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-2'
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor='character-input' className='text-slate-300 text-sm font-medium cursor-pointer'>Special Characters</label>
            </div>
          </div>

          <button
            onClick={PasswordGenerator}
            className='w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200'
          >
            Generate Password
          </button>

        </div>
      </div>
    </>
  )
}

export default App