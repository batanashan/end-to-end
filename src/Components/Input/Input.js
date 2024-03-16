import React from 'react'

const Input = (props) => {
    const {lbl,type,errorMsg}=props;
  return (
    <div>
      
<div className='row mb-2'>
<div className='col-sm-5 text-end'><b>{lbl}</b></div>
<div className='col-sm-3 '><input  type ={type } className='form-control'/></div>
<div className='col-sm-4 text-danger'>{errorMsg}</div>
</div>
    </div>
  )
}

export default Input
