import React, { useReducer } from 'react'
let initalState={count:0}
let reducer=(counter,action)=>{
    console.log("action",action)
    console.log("counter",counter)
    switch(action.type){
        case "increment":
            return {count:counter.count+1}
        case "decrement":
            return {count:counter.count-1}
        case "reset":
            return {count:0}
        default:throw new Error("Invalid case or action")

    }
}
function Usereducercount() {
    let [counter,setcounter]=useReducer(reducer,initalState)
  return (
    <div>
        <h1>Usereducercount</h1>
        <p>Count: {counter.count}</p>
        <button onClick={()=>setcounter({type:"increment"})}>+</button>
        <button onClick={()=>setcounter({type:"decrement"})}>-</button>
        <button onClick={()=>setcounter({type:"reset"})}>reset</button>
    </div>
  )
}

export default Usereducercount