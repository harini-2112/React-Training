import React, { useEffect, useState } from 'react'

function Useeffecthook() {
    let [count,setcount]=useState(0)
    useEffect(()=>{
      console.log("hello");
      
        setTimeout(()=>{
setcount(count+1)
        },1000)
    },[])
  return (
    <div>
        <h1>Useeffecthook</h1>
        <p>count: {count}</p>
       
    </div>
  )
}

export default Useeffecthook