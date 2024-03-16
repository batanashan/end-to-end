'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import './Menu.css'
import configure from './configuration.json'
const Menu = () => {
  const [isShow,setIsShow] = useState(document.body.clientWidth>700 ?false : true)
  const [left,setLeft] = useState(-150)
  const [clr,setClr] =useState("home")

  const fnResize =() =>{
    if(document.body.clientWidth<700){
    setIsShow(true)
    }
    else{
      setIsShow(false)
    }
  }
  window.addEventListener('resize',fnResize)
            const handleMobileBtnClick =() =>{
         setLeft(left === 0? -150 :0)
           }

           const fnMenuClick = (eve)=>{
            const {id} =eve.target
            eve.stopPropagation()
            setLeft(-150)
            setClr(id)
           }

  return (
    <div>
    { isShow && <button className='mobile-btn' onClick={handleMobileBtnClick}>
        <span></span>
        <span></span>
        <span></span>
        

      </button>
}
    <ul style ={{left}}  className={`${isShow? 'mobile-menu' : 'menu' }`}>

      {
        configure.map((obj,ind)=>{
          const {href,id,item} = obj;
          return <li key ={`li_${ind}`}><Link href ={href} id={id} className={`${clr===id?'menuItem':''}`} onClick={fnMenuClick}>{item}</Link></li>

        })
      }


        {/* <li ><Link href ="/home" id="home" className={`${clr==="home"?'menuItem':''}`} onClick={fnMenuClick}>Home</Link></li>
        <li><Link href="/users" id="contact" className={`${clr==="users"?'menuItem':''}`}  onClick={fnMenuClick}>Users</Link></li>
        <li><Link href="/profile"   id= "profile"   className={`${clr==="profile"?'menuItem':''}`} onClick={fnMenuClick}>Profile</Link></li>
        <li><Link href="/logout"   id= "logout"   className={`${clr==="logout"?'menuItem':''}`} onClick={fnMenuClick}>Logout</Link></li> */}
  
    </ul>

     
     </div>
  )
}

export default Menu
