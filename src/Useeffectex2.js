import React, { useEffect, useState } from 'react'

function Useeffectex2() {
    let [count,setcount]=useState(1)
    let [isClick, setIsclick] = useState(false)
    let [result,setresult]=useState(0)
    useEffect(()=>{
        setresult(count * count)
        console.log(isClick);
        
    },[count])
  return (
    <div>
        <h2>Useeffectex2</h2>
        <p>Count: {count}</p>
        <button onClick={()=>setcount(count+1)}>+</button>
        <button onClick={()=>setcount(count-1)}>-</button>
        <button onClick={() => setIsclick(! isClick)}>click</button>
        <p>Result: {result}</p>
    </div>
  )
}

export default Useeffectex2