import React from 'react'

const Stripe = ({value}) => {
  return (
    <div className='w-[49vw] h-[5vw]  p-5 px-5 border-t-[1px] border-b-[1px] border-r-[1px] border-white flex justify-between items-center'>
    <img className='cover ' src={value.url} alt='' />
    <span className='font-semibold text-'>{value.number}</span>
  </div>
  )
}

export default Stripe
