import React, { createContext, useState } from 'react'
import Context2 from './Context2'
export let Usercontext=createContext()
function Context1() {
    let [name,setname]=useState("Janani")
  return (
    <div>
        <h1>Context1</h1>
        <p>Name in Context1: {name}</p>
        <Usercontext.Provider value={[name,setname]}>
        <Context2/>
        </Usercontext.Provider>
       
    </div>
  )
}

export default Context1