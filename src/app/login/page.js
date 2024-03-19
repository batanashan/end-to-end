'use client'
import Input from '@/Components/Input/Input'
import React, { useState } from 'react'
import configure from './configuration.json'
const Login = () => {
  const [inputArr,setInputArr] = useState( configure)
  const [data,setData] = useState({})

 
  const fnLogin =()=>{
    let isFormInValid = true;
 
    const clonedInputArr = JSON.parse(JSON.stringify( inputArr))
    var dataobj = {}
    clonedInputArr.forEach((inputControlObject )=>{
 dataobj[inputControlObject .name] = inputControlObject .value

 switch(inputControlObject.name){
  case 'uid':
      if(!inputControlObject.value){
          inputControlObject.errorMsg="please enter uid"
        }
        break;
  case 'pwd':
    if(!inputControlObject.value){
      inputControlObject.errorMsg="please enter pwd"
    }

 }
 isFormInValid = clonedInputArr.some((obj)=>obj.errorMsg)
 setInputArr(clonedInputArr)
    })
    if(isFormInValid){
return;
    }

  alert("server connect")
  }




  const  fnChange =(eve)=>{

 const {name,value} = eve.target
  const clonedInputArr = JSON.parse(JSON.stringify( inputArr))
   const inputControlObject = clonedInputArr .find((obj)=>{
      return obj.name === name

     })
        inputControlObject.errorMsg= "";
     inputControlObject.value = value;

 switch(inputControlObject.name){
  case 'uid':
      if(!inputControlObject.value){
          inputControlObject.errorMsg="please enter uid"
        }
        break;
  case 'pwd':
    if(!inputControlObject.value){
      inputControlObject.errorMsg="please enter pwd"
    }

 }

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
