import React from 'react'
import Button from './Button'

const product = () => {
  return (
    <div className='w-full py-5 text-white bg-green-900 '>
    <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
         <h1 className='text-6xl font-semibold'>Article</h1>
         <div className='dets w-1/3 '>
            <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
            <Button/>
         </div>
        
    </div>
</div>
  )
}

export default product
