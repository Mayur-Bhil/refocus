import React from 'react'
import { PiArrowBendDownRightBold } from 'react-icons/pi'

const   Button = () => {
  return (
    <div className='min-w-40 py-2 mr-5 px-5 bg-zinc-300 rounded-full text-black  hover:bg-zinc-400 transition-all duration-300 ease-in-out'>
          <span className='text-sm font-medium flex justify-between items-center'>Get Started <PiArrowBendDownRightBold /></span>
    </div>
  )
}

export default Button

