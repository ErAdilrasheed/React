import { useState } from "react"


function App() {
  const [color , setColor] = useState("black")

  return (
  <div className="w-full h-screen duration-200"
    style ={{backgroundColor: color}}
  >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">


<button onClick={()=> setColor("#FF671F")}
        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"#FF671F"}}>Saffron</button>


<button onClick={()=> setColor("#046A38")}
        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"#046A38"}}>Green</button>

<button onClick={()=> setColor("#06038D")}
        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"#06038D"}}>Navy Blue</button>

<button onClick={()=> setColor("#810000")}
        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"#810000"}}>Maroon</button>

<button onClick={()=> setColor("#75A47F")}
        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"#75A47F"}}>Light Green</button>

<button onClick={()=> setColor("#00FFFF")}
        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"#00FFFF"}}>Cyan</button>

<button onClick={()=> setColor("#FFFF00")}
        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"#FFFF00"}}>Yellow</button>

<button onClick={()=> setColor("#FF00FF")}
        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"#FF00FF"}}>Magenta</button>

<button onClick={()=> setColor("#FFC0CB")}
        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"#FFC0CB"}}>Pink</button>

<button onClick={()=> setColor("#808000")}
        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"#808000"}}>Olive</button>

<button onClick={()=> setColor("#C0C0C0")}
        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"#C0C0C0"}}>Silver</button>

<button onClick={()=> setColor("#A52A2A")}
        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"#A52A2A"}}>Brown</button>

<button onClick={()=> setColor("#800080")}
        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"#800080"}}>Purple</button>


      </div>
    </div>
  </div>
  )
}

export default App
