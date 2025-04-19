import React from 'react'
import { useSelector } from 'react-redux'
import Sareecontainer from './Sareecontainer';

const Newadd = () => {
    const sareeArray = useSelector(store=>store?.newSaree?.newSaree);

    if(sareeArray == 0) return <div className='mt-10'><h1 className='text-2xl'>😭 Sorry there is no new collection added</h1></div>
  return (
    <div className='bg-[#33838c] h-screen text-[#cbae57]'>
        <div>
            <h1 className='text-2xl pt-5 font-semibold'>Welcome! to the new collection of our store</h1>
        </div>
        <div className='mt-10 flex ml-5'>
            <Sareecontainer sareeInfo={sareeArray} />
        </div>
    </div>
  )
}

export default Newadd