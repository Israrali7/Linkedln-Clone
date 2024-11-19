import React from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoClose, IoLogoLinkedin } from "react-icons/io5";

function Posts() {
    return (
        <>
            <div className='h-auto w-[580px] bg-white ml-7 rounded-md'>
                <div className='flex border p-3 justify-center rounded-md'>
                    <h6 className='mr-[400px]'>Suggested</h6>
                    <HiOutlineDotsHorizontal className='text-xl ml-2' />
                    <IoClose className='text-xl ml-2' />
                </div>
                <div className="bg-white rounded-lg w-[580px]  max-w-lg mx-auto p-6 w-">
                    <div className="flex items-center mb-4">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D5603AQHv6LsdiUg1kw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695167344576?e=1735776000&v=beta&t=LIQ-aXQc5SsfGW1HkWOrleTecyobuRayim_YI_B5vfE"
                            alt="Profile"
                            className="rounded-full w-[50px] h-[50px] mr-4"
                        />
                        <div>
                            <div className="font-semibold text-left">Bill Gates</div>
                            <p className="text-sm text-gray-500 text-left">Chair, Gates Foundation and Founder, Breakthrough Energy</p>
                            <p className="text-sm text-gray-400 text-left">1w • Following</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className='text-left text-sm'>
                            In London this week, I had the opportunity to speak with UK MPs about the country’s vital role in tackling global health challenges at an event hosted by the <a href="#" className="text-blue-600 hover:underline">Coalition for Global Prosperity</a>. Incredible progress has been made...
                        </p>
                    </div>
                    <img
                        src="https://tse3.mm.bing.net/th?id=OIP.rVY9Is84BzbT3jsZgmZJnQHaFj&pid=Api&P=0&h=220"
                        alt="Event"
                        className="w-full rounded-lg"
                    />
                </div>
            </div>
            <div className='h-auto w-[580px] bg-white ml-7 rounded-md'>
                <div className="bg-white rounded-lg w-[580px] mt-2  max-w-lg mx-auto p-6 w-">
                    <div className="flex items-center mb-4">
                        <img
                            src="https://tse3.mm.bing.net/th?id=OIP.guGKYVRGPXvXc75WwsYb2AHaHa&pid=Api&P=0&h=220"
                            alt="Profile"
                            className="rounded-full w-[50px] h-[50px] mr-4"
                        />
                        <div>
                            <div className="font-semibold text-left">Marks Zakarburg</div>
                            <p className="text-sm text-gray-500 text-left">Chair, Gates Foundation and Founder, Facebook</p>
                            <p className="text-sm text-gray-400 text-left">5w • Following</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className='text-left text-sm'>
                            In London this week, I had the opportunity to speak with UK MPs about the country’s vital role in tackling global health challenges at an event hosted by the <a href="#" className="text-blue-600 hover:underline">Coalition for Global Prosperity</a>. Incredible progress has been made...
                        </p>
                    </div>
                    <img
                        src="https://tse1.mm.bing.net/th?id=OIP.YG37OYPm-3iwraz_cUPwkgHaHa&pid=Api&P=0&h=220"
                        alt="Event"
                        className="w-full rounded-lg"
                    />
                </div>
            </div>
        </>
    )
}

export default Posts
