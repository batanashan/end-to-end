'use client'
import Input from '@/Components/Input/Input'
import React, { useState } from 'react'
import configure from './configuration.json'
const Login = () => {
  const [inputArr,setInputArr] = useState( configure)
  const [data,setData] = useState({})
  const fnLogin =()=>{
 
    const clonedInputArr = JSON.parse(JSON.stringify( inputArr))
    var dataobj = {}
    clonedInputArr.forEach((obj)=>{
 dataobj[obj.name] = obj.value
    })
    console.log(dataobj)
  }
  const  fnChange =(eve)=>{

 const {name,value} = eve.target
  const clonedInputArr = JSON.parse(JSON.stringify( inputArr))
   const inputControlObject = clonedInputArr .find((obj)=>{
      return obj.name === name

     })
     inputControlObject.value = value;
     setInputArr(clonedInputArr )
  
  }
  return <div className='mt-3' >

{
    inputArr.map((obj,ind)=>{
        return <Input key={`input_${ind}`} {...obj} fnChange={fnChange} />

    })
}

<div className='row'>
    <div className='offset-5 col-sm-7'><button className='btn btn-primary' onClick={fnLogin}>Login</button></div>
</div>
  </div>
}

export default Login
