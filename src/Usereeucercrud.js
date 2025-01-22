import React, { useReducer, useState } from 'react'
let reducer=(state,action)=>{
    console.log(action)
    console.log(state)
    switch(action.type){
        case "add":
            return [...state,{id:Date.now(),item:action.item}]
        case "delete":
            return state.filter(item=>item.id!=action.id)
        case "update":
            return state.map(item=>item.id==action.id?{...item,item:action.item}:item)
    }
}
function Usereeucercrud() {
    let [cart,setcart]=useReducer(reducer,[])
    let [item,setitem]=useState("")
    let [editid,seteditid]=useState("")
  

    let handleAddtocart=()=>{
        if(editid){
            setcart({type:"update", id:editid,item})
        
            seteditid("")
        }
        else{
            setcart({type:"add",item,})
        }
        setitem("")
    }
    console.log(cart)

    let handledelete=(id)=>{
setcart({type:"delete",id})
    }

    let handleedit=(id,item)=>{
        console.log("edit")
seteditid(id) 
setitem(item)

    }

  return (
    <div>
        <h1>Usereeucercrud</h1>
        <input type="text" onChange={(e)=>setitem(e.target.value)} value={item} placeholder='Enter item'/>
        <button onClick={handleAddtocart}>{editid?"Update" : "Add"}</button>
        <ul>
            {cart.map(data=>(
                <li key={data.id}>{data.item} 
                <button onClick={()=>handledelete(data.id)}>delete</button>
                <button onClick={()=>handleedit(data.id,data.item)}>edit</button></li>
            ))}
        </ul>
    </div>
  )
}

export default Usereeucercrud