import React from 'react'

export default function Grow() {
    return (
        <>
            {/* 1st Part */}
            <div className='w-[800px] bg-white h-[53px] border rounded-lg mt-[14px] ml-3 flex gap-3'>
                <div className='p-4 hover:bg-natural w-20 ml-5 '>
                    <button className='active: text-emerald-700'> Grow</button>
                </div>
                <div className='p-4 hover:bg-natural w-24 ml-3'>
                    <button className='active: text-emerald-700'>Catch Up </button>
                </div>
            </div>

            {/* 2nd part */}
            <div className='w-[800px] bg-white h-[150px] border rounded-lg mt-[14px] ml-3 p-3'>
                <div className=' flex justify-between p-1'>
                    <div>
                        <h1 className='text-md'>Invitation(1)</h1>

                    </div>
                    <div>
                        <h1 className='text-md'>Show All</h1>
                    </div>
                </div>
                <hr className='h-[1px] mt-1 bg-natural' />
                <div className='flex p-2'>
                    <div>
                        <div className='bg-slate-700 h-[75px] w-[75px] mb-3 rounded-full'>
                        </div>
                    </div>
                    <div className='mt-3 ml-2'>
                        <h4 className='text-gray-500 text-sm text-left '>Newsletter • Biweekly</h4>
                        <h1 className='text-left'><span className='font-semibold'>Bill Gates</span> invited you to subscribe to <span className='font-semibold'>Gates Notes</span></h1>
                    </div>
                    <div className='ml-36 '>
                        <button className='p-3 hover:bg-natural rounded-md m-2 '>Ignore</button>
                        <button className='border rounded-xl pl-4 pr-4 ml-4 m-2 text-blue-600 border-blue-700 hover: bg-blue-200'>Accept</button>
                    </div>
                </div>
            </div>
            {/* 3rd part */}
            <div className='w-[800px] bg-white h-[130px] border rounded-lg mt-[14px] ml-3 p-3 '>
                <div className='text-left text-[18px] font-light'>Stay In Touch through daily games</div>
                <div className='flex'>
                    <div className='flex p-2'>
                        <div>
                            <div className='h-12 w-12 mt-1 bg-pink-200'></div>
                            {/* <img  src=' ' alt='  ' /> */}
                        </div>
                        <div>
                            <h1 className='text-left ml-2 text-lg'>Queens #186</h1>
                            <p className='text-left ml-2 text-sm'>Saturday, Nov 2</p>
                        </div>
                        <div className='mt-3 ml-3'>
                            <button className='bg-blue-500 rounded-xl pl-4 pr-4 text-white'>Play</button>
                        </div>
                    </div>
                    <div className='flex p-2 '>
                        <div>
                            <div className='h-12 w-12 mt-1 bg-pink-200'></div>
                            {/* <img  src=' ' alt='  ' /> */}
                        </div>
                        <div>
                            <h1 className='text-left ml-2 text-lg'>Queens #186</h1>
                            <p className='text-left ml-2 text-sm'>Saturday, Nov 2</p>
                        </div>
                        <div className='mt-3 ml-3'>
                            <button className='bg-blue-500 rounded-xl pl-4 pr-4 text-white'>Play</button>
                        </div>
                    </div>
                    <div className='flex p-2 '>
                        <div>
                            <div className='h-12 w-12 mt-1 bg-pink-200'></div>
                            {/* <img  src=' ' alt='  ' /> */}
                        </div>
                        <div>
                            <h1 className='text-left ml-2 text-lg'>Queens #186</h1>
                            <p className='text-left ml-2 text-sm'>Saturday, Nov 2</p>
                        </div>
                        <div className='mt-3 ml-3'>
                            <button className='bg-blue-500 rounded-xl pl-4 pr-4 text-white'>Play</button>
                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    )
}
