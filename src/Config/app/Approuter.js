import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard'
import Navbar from '../../Components/Navbar'
import Network from '../../Pages/Network'

function Approuter() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div  >
        <img className='w-full h-full' src='https://blog.stackfindover.com/wp-content/uploads/2021/09/LinkedIn-Loading-Animation.gif' alt='Loading...' />
      </div>
    )
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='network' element={<Network />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Approuter
