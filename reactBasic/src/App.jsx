import { useState } from "react"
function App() {

  let [counter , setCounter] = useState(0)

  const addValue = ()=>{
    setCounter(counter+1)
  }
  const removeValue = ()=>{
    setCounter(counter-1)
  }
 


  return (
  <>
   <button onClick={addValue}>Add Value:{counter}</button>
   <button onClick={removeValue}>Remove Value:{counter}</button>
   <p>footer:{counter}</p>
  
  </>
  )
}

export default App
