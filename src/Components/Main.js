import React from 'react'
import Sidebar from './Sidebar'
import Browse from './Browse'

const Main = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <Browse />
    </div>
  )
}

export default Main