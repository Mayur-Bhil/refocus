import React from 'react'

const Work = () => {
    const images  = [
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d5407cdf203d6e70483a_Showcase-%204%203-p-2000.webp",top:"50%" ,left:"50%",isActive:true},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d66b3b5bc5130805f1d3_Weglot%20Like%20Magic%20-%204%203.webp",top:"56%" ,left:"44%",isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d713cb10965e8dbdee18_YIR%202021%20-%204%203.webp",top:"52%" ,left:"60%",isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d7a279ee50e826cd2264_Jungle%20-%204%203.webp",top:"60%" ,left:"59%",isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66a2ce8f3cc141895908bf6d_64cd6ec7666ac6009cfcb7db_11.webp",top:"66%" ,left:"47%",isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67ac9777beb31afce6bc2a08_Intenseye-thumbnail_B-4_3.webp",top:"70%" ,left:"55%",isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67ac97034a827d356105bca8_RainfallV1-thumbnail_B-4_3.webp",top:"75%" ,left:"51%",isActive:false},
        
        
    ]
  return (
    <div className='w-full flex mt-20'>
        <div className=' relative max-w-screen-xl mx-auto text-ceneter'>
                    <h1 className='text-[24vw] leading-none tracking-tight font-medium select-none'>Work</h1>
                <div className=' top-0 absolute w-full h-full'> 
                    {images.map((elem,index)=>(

                        elem.isActive && <img key={index} className='absolute w-60 rounded-md -translate-x-[50%] -translate-y-[50%]' src={elem.url} style={{top:elem.top,left:elem.left}}    alt=''/>
                    ))}
                </div>
        </div>

    </div>
  )
}
 
export default Work
