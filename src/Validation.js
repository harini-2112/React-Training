import { ErrorMessage, Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from "yup"


function Validation() {

    let [user,setuser]=useState({
        username:"",
        age:"" ,
        email:""  
    })
    let schema=yup.object().shape({
        username:yup.string().required(),
        age:yup.string().matches(/\d{2,3}/,"Enter only 2 or 3 digits").max(3,"Maximum 3 digits").required(),
        email:yup.string().email().required()
    })

    let handledetails=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
    let handleSubmit=()=>{
        console.log(user)
        setuser({
            username:"",age:"",email:""
        })
    }
    let handlecancel=()=>{
        setuser({
            username:"",age:"",email:""
        })
    }
  return (
    <div >
   
        <h1 >Validation</h1>
        <Formik
        initialValues={user}
        validationSchema={schema}
        onSubmit={handleSubmit}>

     {({handleSubmit,handleChange})=>(
        <form onSubmit={handleSubmit}>
        <h4>Username</h4>
        <input  type="text" name="username" placeholder="Username" onChange={(e)=>{handledetails(e);handleChange(e)}} value={user.username}/>
       <ErrorMessage name='username' component="div" className='text-danger'/>
        <br/>  <br/>
        <input  type="text" name="age" placeholder="Age"onChange={(e)=>{handledetails(e);handleChange(e)}} value={user.age}/>
        <ErrorMessage name='age' component="div" className='text-danger'/>
        <br/>  <br/>
        <input  type="text" name="email" placeholder="Email" onChange={(e)=>{handledetails(e);handleChange(e)}} value={user.email}/>
        <ErrorMessage name='email' component="div" className='text-danger'/>
        <br/>  <br/>
        <button  type="submit">Submit</button> &nbsp;&nbsp;
        <button  type="button" onClick={handlecancel} >Cancel</button>
       
        
        </form>
          )}
        </Formik>
   
    </div>
  )
}

export default Validation