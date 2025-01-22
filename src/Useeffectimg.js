import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Useeffectimg() {
    let [record,setrecord]=useState([])

    let fetchdata =async()=>{
        let response=await axios.get("https://fakestoreapi.com/products")
        console.log(response.data)
        setrecord(response.data)
            }

    useEffect(()=>{
fetchdata()
    },[])
  
  return (
    <div>
        <h1>Useeffectimg</h1>
        <ul>
            {record.map(item=>(
                <li key={item.id}>{item.id} - {item.title} - {item.price} - {item.description}
                <img src={item.image} alt={item.title} style={{width:"150px"}}/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Useeffectimg