import React from 'react'
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

export default function Feed() {
    return (
        <>
            <div className='h-[400px] w-[280px] bg-white rounded-md ml-6 mt-4'>
                <div className='flex  justify-between p-3'>
                    <h2>Add to your feed</h2>
                    <BsFillInfoSquareFill />
                </div>
                <div className='flex ml-2'>
                    <div>
                        <img src="https://wallpapercave.com/wp/wp8147893.jpg" className='mr-2 rounded-full h-12 w-12' alt='Loading Pictures' />
                    </div>
                    <div>
                        <h3 className='text-left ml-1 font-semibold'>Cristiano Ronaldo</h3>
                        <p className='text-left text-[11px] ml-1 text-gray-500'>Cristiano Ronaldo is a Portuguese professional footballer....</p>
                        <div className='flex p-1 border w-24 rounded-lg justify-center items-center gap-1 mt-1'>
                            <FaPlus />
                            <button> Follow</button>
                        </div>
                    </div>
                </div>
                <div className='flex ml-2 mt-5'>
                    <div>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.Xji_TLi-6wle9un5ddiNfgHaEl&pid=Api&P=0&h=220" className='mr-2 rounded-full h-12 w-12' alt='Loading Pictures' />
                    </div>
                    <div>
                        <h3 className='text-left ml-1 font-semibold'>Elon Musk</h3>
                        <p className='text-left text-[11px] ml-1 text-gray-500'>Cristiano Ronaldo is a Portuguese professional footballer....</p>
                        <div className='flex p-1 border w-24 rounded-lg justify-center items-center gap-1 mt-1 '>
                            <FaPlus />
                            <button> Follow</button>
                        </div>
                    </div>
                </div>
                <div className='flex ml-2 mt-5'>
                    <div>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.6iIHk-GS5ZI0tc7zDIQrwQHaFj&pid=Api&P=0&h=220" className='mr-2 rounded-full h-11 w-11' alt='Loading Pictures' />
                    </div>
                    <div>
                        <h3 className='text-left ml-1 font-semibold'>Virat Kohli</h3>
                        <p className='text-left text-[11px] ml-1 text-gray-500'>Cristiano Ronaldo is a Portuguese professional footballer....</p>
                        <div className='flex p-1 border w-24 rounded-lg justify-center items-center gap-1 mt-1'>
                            <FaPlus />
                            <button> Follow</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
