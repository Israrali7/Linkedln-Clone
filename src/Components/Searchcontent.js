import React from 'react'
import { MdPhotoSizeSelectActual ,MdEventAvailable } from "react-icons/md";
import { SiLibreofficewriter } from "react-icons/si";

function Searchcontent() {
  return (
    <div>
      <div className='bg-white w-[580px] h-[120px] rounded-lg ml-6 border  mt-4'>
        <div className='flex  justify-center'>
        <img alt="Profile Picture" className="rounded-full h-11 w-11 mt-3 m-2" height="80" src="https://storage.googleapis.com/a1aa/image/5ebpm2Pxeggx705khLijizee9puUnKMekhX9HSRRdeg8eDS1JA.jpg" width="80" />
        <input className='w-[480px] mt-3 p-3 h-[45px] rounded-full border  hover:bg-natural' placeholder='Start a Post, Try Writing with Ai'/>
        </div>
        <div className='flex mt-2 gap-24 pl-12'> 
            <div className='flex items-center gap-3 p-2 rounded-md hover:bg-natural'>
                < MdPhotoSizeSelectActual  className='text-xl text-blue-500' />
                <h4>Media</h4>
            </div>
            <div className='flex items-center gap-3 p-2 rounded-md hover:bg-natural '>
                < MdEventAvailable className='text-2xl text-amber-600' />
                <h4>Event</h4>
            </div>
            <div className='flex items-center gap-3 p-2 rounded-md hover:bg-natural'>
                < SiLibreofficewriter className='text-xl text-red-500' />
                <h4>Write Article</h4>
            </div>
           
        </div>

      </div>
    </div>
  )
}

export default Searchcontent
