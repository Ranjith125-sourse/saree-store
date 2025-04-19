import React from 'react'
import Sareecard from './Sareecard'

const Sareecontainer = ({sareeInfo}) => {

  return (
    <div className='flex flex-wrap justify-evenly'>
    {
      sareeInfo.map((saree) => (
        <Sareecard key={sareeInfo.id} sareeInfo={saree} />
      ))
    }
        
    </div>
  )
}

export default Sareecontainer