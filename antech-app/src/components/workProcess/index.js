import React from 'react'
import img1 from "../../../public/images/feature-s4-shape.png"
import img2 from "../../../public/images/feature-s4-shape2.png"
import Image from 'next/image'
export default function WorkProcess () {
   
  return (
    <div className='bg-gray-100 pt-10'>
        <div className='flex flex-col items-center gap-2 mt-16'>
        <p className='text-blue-400 text-xl font-semibold'>How We Work</p>
        <p className='font-semibold text-5xl '>Our Works Process</p>
        </div>

    <div className='flex justify-center mt-10 flex-wrap'>
        <div className='w-96 h-96 relative group transition-all '> 
       <Image src={img1} alt='kuch b nahi' width={400}  height={400} ></Image>
       <div className='transition-transform transform group-hover:scale-90 rounded-full w-[80px] h-[80px] border-white border-8 bg-blue-500 text-white font-bold flex justify-center items-center font-bold text-[20px] absolute top-8 z-10 left-64'>01</div>
        <div
            className="w-64 flex flex-col h-64 rounded-full absolute left-8 top-7
            items-center justify-center  text-center
            bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-8"> 
                <p className='text-2xl lg:text-2xl font-semibold pb-2'>Create a Plan</p>
        <p className='text-md text-gray-600'>There are many variation of passages of Lorem Ips available, but them</p>
        </div>
            </div>
        <div className='w-96 h-96 relative group transition-all' > 
       <Image src={img1}  alt='kuch b nahi'  width={400} height={400}></Image>
       <div className='transition-transform transform group-hover:scale-90 rounded-full w-[80px] h-[80px] border-white border-8 bg-blue-500 text-white font-bold flex justify-center items-center font-bold text-[20px] absolute top-8 z-10 left-64'>02</div>
       <div
            class="w-64 flex flex-col h-64 rounded-full absolute left-8 top-7
            items-center justify-center  text-center
            bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-8"> 
                <p className='text-2xl lg:text-2xl font-semibold pb-2'>Start Working</p>
        <p className='text-md text-gray-600'>There are many variation of passages of Lorem Ips available, but them</p>
        </div>
        </div>
        <div className='w-80 h-00 hidden lg:block relative group transition-all'> 
       <Image src={img2}  alt='kuch b nahi'  width={400} height={400}></Image>
       <div className='transition-transform transform group-hover:scale-90 rounded-full w-[80px] h-[80px] border-white border-8 bg-blue-500 text-white font-bold flex justify-center items-center font-bold text-[20px] absolute top-8 z-10 left-64'>03</div>
       <div
            class="w-64 flex flex-col h-64 rounded-full absolute left-8 top-7
            items-center justify-center  text-center
            bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-8"> 
                <p className='text-2xl lg:text-2xl font-semibold pb-2'>Publish Busines</p>
        <p className='text-md text-gray-600'>There are many variation of passages of Lorem Ips available, but them</p>
        </div>
        </div>
    </div>
    </div>
  )
}

// export default WorkProcess
