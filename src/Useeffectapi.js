import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Useeffectapi() {
    let [record,setrecord]=useState([])

    let fetchdata =async()=>{
        let response=await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response.data)
        setrecord(response.data)
            }

    useEffect(()=>{
fetchdata()
    },[])
  
  return (
    <div>
        <h1>Useeffectapi</h1>
        <ul>
            {record.slice(0,10).map(item=>(
                <li key={item.id}>{item.id} - {item.title} - {item.body} </li>
            ))}
        </ul>
    </div>
  )
}

export default Useeffectapi