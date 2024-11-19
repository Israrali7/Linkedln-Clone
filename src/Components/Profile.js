import React from 'react'
import { IoPersonAddSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { FaSquarePiedPiper } from "react-icons/fa6";

function Profile() {
    return (
        <>
            <div className='border rounded-t-xl  rounded-b-lg ml-32 mt-4 bg-white h-[350px] w-[230px] p-2 '>
                <div class="flex items-center bg-white justify-center h-24 rounded-t-lg">
                    <img alt="Profile Picture" class="rounded-full h-20 w-20 mt-9" height="80" src="https://storage.googleapis.com/a1aa/image/5ebpm2Pxeggx705khLijizee9puUnKMekhX9HSRRdeg8eDS1JA.jpg" width="80" />
                </div>
                <h2 className='mt-3 font-semibold'>Israar Ali</h2>
                <p className='text-[13px] mb-2'>Student at SMIT Gulshan Campus</p>
                <div className='border-b-1 border-t-2 p-2 pb-3 hover:bg-natural'>
                    <div className='flex justify-between items-center '>
                        <h5 className='text-sm' >Connections</h5>
                        <IoPersonAddSharp />
                    </div>
                    <p className='text-sm text-start font-medium'>Connect with alumini</p>
                </div>
                <div className='border-b-2 border-t-2 p-2 pb-3 hover:bg-natural'>
                    <div className='flex justify-between items-center '>
                        <h5 className='text-[14px]' >Acheive Your Sales goals</h5>
                    </div>
                    <div className='flex gap-1'>
                    <FaSquarePiedPiper className='text-orange-400'/>
                    <p className='text-sm text-start font-medium hover:text-blue-700'>Try sales Your Nav PKR0</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center p-2 hover:bg-natural  m-2 rounded-md'>
                <FaBookmark/>
                <h5>Saved item</h5>
                </div>
            </div>
        </>
    )
}

export default Profile
