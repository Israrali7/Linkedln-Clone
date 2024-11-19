import React from 'react'
import { IoPeople } from "react-icons/io5";

function Manage() {
  return (
    <div>
      <div className='bg-white h-[410px] w-[310px] border rounded-lg ml-32 mt-4' >
        <h1 className='p-3 ml-3 text-[18px] text-left'>Manage my network</h1>
        <hr className='border-1' />
        <div className='p-2'>
          <div className='flex p-2  gap-4 '>
            <IoPeople className='text-xl text-left' />
            <h1 className='text-lg text-left'>Connections</h1>
          </div>
          <div className='flex p-2  gap-4 '>
            <IoPeople className='text-xl text-left' />
            <h1 className='text-lg text-left'>Contact</h1>
          </div>
          <div className='flex p-2  gap-4 '>
            <IoPeople className='text-xl text-left' />
            <h1 className='text-lg text-left'> Following & Follower</h1>
          </div>
          <div className='flex p-2  gap-4 '>
            <IoPeople className='text-xl text-left' />
            <h1 className='text-l text-leftg'>Groups</h1>
          </div>
          <div className='flex p-2  gap-4 '>
            <IoPeople className='text-xl text-left' />
            <h1 className='text-l text-leftg'>Events</h1>
          </div>
          <div className='flex p-2  gap-4 '>
            <IoPeople className='text-xl text-left' />
            <h1 className='text- text-leftlg'>Pages</h1>
          </div>
          <div className='flex p-2  gap-4 '>
            <IoPeople className='text-xl text-left' />
            <h1 className='text-lg text-left'> Newsletter</h1>
          </div>
          <div className='flex p-2  gap-4'>
            <IoPeople className='text-xl' />
            <h1 className='text-lg'>Group</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manage
