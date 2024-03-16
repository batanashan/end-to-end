import Input from '@/Components/Input/Input'
import React from 'react'
import configure from './configuration.json'
const Login = () => {
  return <div className='mt-3' >

{
    configure.map((obj,ind)=>{
        return <Input {...obj} />

    })
}

<div className='row'>
    <div className='offset-5 col-sm-7'><button className='btn btn-primary'>Login</button></div>
</div>
  </div>
}

export default Login
