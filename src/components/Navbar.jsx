import React from 'react'
import Button from './Button'


const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-6 text-white border-b-[1px] border-zinc-100'>
            <div className='flex justify-between items-center'>
                 <img src="" alt="Refokus" />
                 <div className='links flex gap-14 ml-20'>
                    {["Home","Work","About","Culture","","News"].map((elem,i)=> <a key={i} className='flex items-center'>
                        {elem.length == 0 &&(<span className='h-5 bg-zinc-400 w-[2px]'></span>)}
                        {i==1 && (<span className='inline-block text-shadow-green-400 w-2 h-2 ml-2  bg-green-400 rounded-full'></span>)}
                        {elem}        
                 </a>)}
                 </div>
                 <Button/>
            </div>
             
    </div>
  )
}

export default Navbar
