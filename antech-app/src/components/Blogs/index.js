import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import blogImg1 from "../../../public/images/post-thumb-1.png"
import blogImg2 from "../../../public/images/post-thumb-2.png"
import blogImg3 from "../../../public/images/post-thumb-3.png"
import Image from 'next/image';
const Blogs = () => (
    <div className='flex gap-10 justify-center bg-gray-300 pt-32 pb-32'>
  <div className='w-[380px] h-[530] bg-white flex flex-col p-5 '>
    <Image src={blogImg1}></Image>
    <div className='flex justify-between pt-5 pb-5'><p className='text-gray-700'>By Admin</p> <p className='text-gray-700'>12 Comments</p></div>
    <p className='text-2xl font-semibold text-gray-800  '>Desk with Charts Smart Dusinessman Sitting</p>
    <div className='flex justify-between items-center'><p className='text-blue-600 text-lg font-semibold pt-5 '>Learn more</p><FaArrowRightLong /></div>
    </div>
  <div className='w-[380px] h-[530] bg-white flex flex-col p-5 '>
    <Image src={blogImg2}></Image>
    <div className='flex justify-between pt-5 pb-5'><p className='text-gray-700'>By Admin</p> <p className='text-gray-700'>12 Comments</p></div>
    <p className='text-2xl font-semibold text-gray-800  '>Medium shot woman with vr glasses</p>
    <div className='flex justify-between items-center'><p className='text-blue-600 text-lg font-semibold pt-5 '>Learn more</p><FaArrowRightLong /></div>
    </div>
  <div className='w-[380px] h-[530] bg-white flex flex-col p-5'>
    <Image src={blogImg3} className='w-full h-full'></Image>
    <div className='flex justify-between pt-5 pb-5'><p className='text-gray-700'>By Admin</p> <p className='text-gray-700'>12 Comments</p></div>
    <p className='text-2xl font-semibold text-gray-800  '>Easy & Most Powerful Server and Platform.</p>
    <div className='flex justify-between items-center'><p className='text-blue-600 text-lg font-semibold pt-5 '>Learn more</p><FaArrowRightLong /></div>
    </div>
      </div>
);
export default Blogs;