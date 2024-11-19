import React from 'react'
import Manage from '../Components/Manage'
import Grow from '../Components/Grow'

export default function Network() {
  return (
    <div className='bg-isabelline p-2 h-[800px] flex'>
      <div >
        <Manage />
      </div>
      <div>
        <Grow/>
      </div>
    </div>
  )
}
