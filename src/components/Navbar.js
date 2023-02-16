import React from 'react'
import profileimg from "./../assets/images/main.png"
import { IoIosNotifications } from "react-icons/io"
import {GiHamburgerMenu} from "react-icons/gi";
import { useState } from 'react'

const Navbar = ({onClick}) => {
 
  return (
    <div className='w-full'>
      <div className="navbar bg-base-100 sm:h-[36px] w-full flex justify-between">
        <button className="btn btn-square btn-ghost" onClick={onClick}>
         <GiHamburgerMenu size={30} />
        </button>
        <div className="flex-none gap-4">
          
          <div className="dropdown dropdown-end" style={{paddingRight:"10px"}}>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="sm:w-[40px] sm:h-[40px]  rounded-full">
                <img src={profileimg} style={{width:"40px", height:"40px", borderRadius:"50%"}}/>
              </div>
            </label>
            
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Navbar