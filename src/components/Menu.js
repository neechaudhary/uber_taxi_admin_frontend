import React from 'react';
import profileimg from "./../assets/images/main.png"

import Navbar from './Navbar';
import Orders_and_profit from './Orders_and_profit';
import Statistics from './Statistics';

//icons
import {AiOutlineDashboard} from 'react-icons/ai'
import {BsPersonBoundingBox,BsBarChartLine} from 'react-icons/bs'
import {IoCarSportSharp} from 'react-icons/io5'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {HiOutlineDocumentCheck} from 'react-icons/hi2'
import {TbReport} from 'react-icons/tb'


const Menu = () => {
  return (
    <div className="w-full min-h-[100vh] bg-red-500">
      {/* ========navbar started =========*/}
      <div className='w-full h-[66px] lg:hidden'>
       <Navbar />
      </div>
      <div className='md:flex'>
      <div className='md:w-[250px] min-h-[100vh] py-4 px-2 bg-[#ffffff] border-r-2 hidden lg:block grow-0 shrink-0'>
        <div className='logo p-2 text-[#07A64B] flex align-middle'>
          <span className='text-lg font-bold'>Zuber taxi</span>
        </div>
        <div className='profile_body bg-[#f2f2f2] flex py-4 px-2  '>
          <div className='flex justify-center '>
            <img src={profileimg} alt="profile image" className='w-[50px] h-[50px] rounded-full' />
          </div>
          <div className='name and details pl-3'>
            <span className='font-semibold'>Neeraj chaudhary</span> <br />
            <span>Admin</span>
          </div>
        </div>
        <div className='pt-6'>
          <ul className="menu bg-base-100 rounded-none " >
            <li className="menu-title">
              <span >Park info</span>
            </li>
            <li><a><AiOutlineDashboard size={20}/>Dashboard</a></li>
            <li><a><BsPersonBoundingBox size={20}/>Drivers</a></li>
            <li><a><IoCarSportSharp size={20}/>Cars</a></li>
            <li><a><MdOutlineTravelExplore size={20}/>Travels</a></li>

            <li className="menu-title">
              <span>Reports</span>
            </li>
            <li><a><HiOutlineDocumentCheck size={20}/>Payroll</a></li>
            <li><a><TbReport size={20}/>Taxi reports</a></li>
            <li><a><BsBarChartLine size={20}/>productivity</a></li>

          </ul>
        </div>
      </div>
      
      {/* ========navbar end =========*/}

      <div className='md:w-[350px] border-r-2 grow-0 shrink-0'>
        <Statistics />
      </div>
      <div className='grow shrink  bg-white'>
        <Orders_and_profit />
      </div>
      </div>
      

    </div>
  )
}

export default Menu