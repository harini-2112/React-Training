import React, { useContext } from 'react'
import { Usercontext } from './Context1'

function Context3() {
    let [name,setname]=useContext(Usercontext)
  return (
    <div>
        <h3>Context3</h3>
        <p>Name in Context3: {name}</p>
        <button onClick={()=>setname("Harini")}>change in context3</button>
    </div>
  )
}

export default Context3