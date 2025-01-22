import React, { useCallback, useMemo, useState } from 'react'

function Usememoclbak() {
    let [count,setcount]=useState(0)

    let handleincrement=useCallback(()=>{
        setcount(count+1)
    },[])

    let result=useMemo(()=>{
return count * count
    },[count])
  return (
    <div>
        <h1>Usememoclbak</h1>
        <p> count:{count}</p>
        <button onClick={handleincrement}>+</button>
        <p>result: {result}</p>
    </div>
  )
}

export default Usememoclbak