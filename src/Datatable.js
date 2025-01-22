import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'
function Datatable() {
    let [record,setrecord]=useState([])
    useEffect(()=>{
        fetchdata()
    },[])

    let fetchdata=async()=>{
        let res=await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(res.data)
            setrecord(res.data)
   
    }
    let columns=[
        {name:"Id",selector:row=>row.id,sortable:true},
        {name:"Title",selector:row=>row.title},
        {name:"Body",selector:row=>row.body}
    ]
    let customStyles={
        headRow:{style:{backgroundColor:"black",color:"white",fontSize:"20px"}},
        cells:{style:{color:"blue",fontSize:"16px"}}
    }
  return (
    <div>
        <h1>Datatable</h1>
        <DataTable 
        data={record}
        columns={columns}
        customStyles={customStyles}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5,10,15]}/>
    </div>
  )
}

export default Datatable












