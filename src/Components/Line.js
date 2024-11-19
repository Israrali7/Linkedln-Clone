import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

function Line() {
    return (
        <div>
            <div className='flex'>
                <hr className='border-0 h-[2px] bg-slate-500 m-3 w-[490px] ml-7 ' />
                <p className='flex text-sm font-light mt-1'>
                    Sort by: <span className='font-medium'>Top</span>
                    <IoMdArrowDropdown />
                </p>
            </div>
        </div>
    )
}

export default Line
