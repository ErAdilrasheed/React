import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
// const [data, setData] = useState([])
// useEffect(()=>{
//     fetch('https://api.github.com/users/eradilrasheed')
//     .then(response => response.json())
//     .then(()=>{
//         setData(data)
//     })
// },[])
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center">
      Github Name: {data.name}
      <img src={data.avatar_url} alt="Git Image" width={300}/>
      Description:{data.bio}
    </div>
  )
}
export default Github
export const gitLoder = async()=>{
const response = await fetch('https://api.github.com/users/eradilrasheed')
return response.json()
}