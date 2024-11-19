import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { TbMessageFilled } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { FaSquarePiedPiper } from "react-icons/fa6";

function Navbar() {
    return (
        <div className='flex p-3 pb-0 bg-white pl-36'>
            <div className='flex'>
                <FaLinkedin className='text-4xl mr-2 text-blue-700' />
                <input placeholder="Search" className='border rounded-md w-52 h-9 p-2' />
            </div>
            <div className='flex ml-16'>
                <div className='ml-4 mr-4'>
                    <IoHomeSharp className='text-2xl w-10 text-gray-500 hover:text-black ' />
                    <Link to={"/"} className='text-sm text-gray-500 hover:text-black'>Home</Link>
                </div>
                <div className='ml-4 mr-4'>
                    <BsPeopleFill className='text-2xl ml-6 text-gray-500 hover:text-black ' />
                    <Link  to={"/network"} className='text-sm text-gray-500 hover:text-black'>My Networks</Link>
                </div>

                <div className='ml-4 mr-4'>
                    <BsFillSuitcaseLgFill className='text-2xl ml-1 text-gray-500 hover:text-black ' />
                    <Link to={"jobs"} className='text-sm text-gray-500 hover:text-black'>Jobs</Link>
                </div>

                <div className='ml-4 mr-4'>
                    <TbMessageFilled className='text-2xl ml-4 text-gray-500 hover:text-black ' />
                    <Link to={"messeges"} className='text-sm text-gray-500 hover:text-black'>Messages</Link>
                </div>

                <div className='ml-4 mr-4'>
                    <IoNotifications className='text-2xl ml-5 text-gray-500 hover:text-black ' />
                    <Link to={"notifications"} className='text-sm text-gray-500 hover:text-black'>Notifications</Link>

                </div>
                <div className='ml-4 mr-4'>
                    <IoPersonCircleSharp className='text-2xl text-gray-500 hover:text-black ' />
                    <Link to={"me"} className='text-sm text-gray-500 hover:text-black'>Me</Link>
                </div>
                <div className='border flex ml-7 pl-5 border-r-0 border-t-0 border-b-0 h-8'>
                <div className='ml-4 mr-4'>
                    <TbGridDots className='text-2xl text-gray-500 ml-5 hover:text-black ' />
                    <Link className='text-sm text-gray-500 hover:text-black'>For Bussiness</Link>
                </div>
                <div className='ml-4 mr-4'>
                    <FaSquarePiedPiper className='text-2xl text-orange-400 ml-6 ' />
                    <Link className='text-sm text-gray-500 hover:text-black'>Try Sales Navigator</Link>
                </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar;
