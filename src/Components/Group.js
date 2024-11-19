import React from 'react'
import { FaPlus } from "react-icons/fa6";

function Group() {
    return (
        <div>
            <div className='border rounded-lg ml-32  bg-white h-[130px] w-[230px] p-2 mt-2 '>
                <h5 className='text-left text-blue-700 text-sm mb-1'>Groups</h5>
                <div className='flex justify-between'><h5 className='text-left text-blue-700 text-sm mb-1'>Event</h5><FaPlus/></div>
                
                <h5 className='text-left text-blue-700 text-sm mb-1'>Followed Hashtags</h5>
                <div className=' items-center p-2 hover:bg-natural border rounded-md'>
                <h5 className=''>Discover More</h5>
                </div>
            </div>
        </div>
    )
}

export default Group
