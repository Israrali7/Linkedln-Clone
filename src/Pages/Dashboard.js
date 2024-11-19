import React, { useState ,useEffect } from 'react'
import Profile from '../Components/Profile'
import Group from '../Components/Group'
import Searchcontent from '../Components/Searchcontent'
import Line from '../Components/Line'
import Posts from '../Components/Posts'
import Feed from '../Components/Feed'


function Dashboard() {
  return (
    <div className='bg-isabelline' >
      <div className=' flex'>
        <div>
          <Profile />
          <Group />
        </div>
        <div>
          <Searchcontent />
          <Line/>
          <Posts/>
        </div>
        <div>
          <Feed/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
