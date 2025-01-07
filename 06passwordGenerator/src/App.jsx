import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, SetnumberAllowed] = useState(false);
  const [charAllowed, SetcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( ()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+= "0123456789"
    if (charAllowed) str+= "~!@#$%^&*()_+[]{}'/.;="
    for (let i = 0; i <=length; i++) {
    let char = Math.floor(Math.random() * str.length+1)
    pass += str.charAt(char)
    }
    setPassword(pass)
  },
   [length,numberAllowed,charAllowed,setPassword])

   useEffect(()=>{
    passwordGenerator()
   },[length,numberAllowed,charAllowed,passwordGenerator])

   const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
   },[password])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none px-3 py-1 w-full'
        placeholder='password'
        readOnly
        ref={passwordRef}
         />
         <button
         onClick={copyPasswordToClipboard} className='outline-none shrink-0 px-3 py-0.5 bg-blue-700 text-white'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={32}
          value={length}
          className='cursore-pointer' 
          onChange={(e) => {setLength(e.target.value)}}/>
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{SetnumberAllowed
            ((prev) => !prev)
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=>{SetcharAllowed
            ((prev) => !prev)
          }} />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
