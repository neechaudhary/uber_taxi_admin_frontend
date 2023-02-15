import React from 'react'
import profileimg from "./../assets/images/main.png"
import { IoIosNotifications } from "react-icons/io"
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
  return (
    <div className='w-full'>
      <div className="navbar bg-base-100 h-[66px] w-full flex justify-between">
        <button className="btn btn-square btn-ghost">
         <GiHamburgerMenu size={30} />
        </button>
        <div className="flex-none gap-4">
          <div className="form-control">
            <div className="indicator">
              <IoIosNotifications className='text-3xl' />
              <span className="badge bg-[#EF4444] border-none badge-lg rounded-full w-5 h-5 indicator-item">8</span>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10  rounded-full">
                <img src={profileimg} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar