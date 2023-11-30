import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import blogImg1 from "../../../public/images/post-thumb-1.png"
import blogImg2 from "../../../public/images/post-thumb-2.png"
import blogImg3 from "../../../public/images/post-thumb-3.png"
import { AiOutlineMessage } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import Image from 'next/image';
const Blogs = () => (
  <div className='bg-gray-200'>
    <p className='text-2xl text-blue-500 font-semibold text-center pt-14'>Our Latest News</p>
    <p className='text-2xl md:text-5xl font-semibold pt-2  text-center'>Learn More Our Blog Post</p>
    <div className='flex flex-wrap gap-10 justify-center  pt-10 pb-32'>
  <div className='w-[380px] h-[490px]  bg-white flex flex-col p-5 '>
    <Image src={blogImg1} style={{width:"350px", height:"320px"}}></Image>
    <div className='flex justify-between pt-5 pb-5'><div className='flex gap-4 items-center'><RiContactsLine className='text-blue-600 text-[22px]'/><p className='text-gray-700'>By Admin</p> </div> <div className='flex items-center gap-2'> <AiOutlineMessage className='text-blue-600 text-[24px]'/><p className='text-gray-700'>12 Comments</p></div></div>
    <p className='text-2xl font-semibold text-gray-800  '>Desk with Charts Smart Dusinessman Sitting</p>
    <div className='flex justify-between items-center'><p className='text-blue-600 text-lg font-semibold pt-5 '>Learn more</p><FaArrowRightLong  className='text-blue-700'/></div>
    </div>
  <div className='w-[380px] h-[490px] bg-white flex flex-col p-5 '>
    <Image src={blogImg2} style={{width:"350px", height:"320px"}}></Image>
    <div className='flex justify-between pt-5 pb-5'><div className='flex gap-4 items-center'><RiContactsLine className='text-blue-600 text-[22px]'/><p className='text-gray-700'>By Admin</p> </div> <div className='flex items-center gap-2'> <AiOutlineMessage className='text-blue-600 text-[24px]'/><p className='text-gray-700'>12 Comments</p></div></div>
    <p className='text-2xl font-semibold text-gray-800  '>Medium shot woman with vr glasses</p>
    <div className='flex justify-between items-center'><p className='text-blue-600 text-lg font-semibold pt-5 '>Learn more</p><FaArrowRightLong className='text-blue-700'/></div>
    </div>
  <div className='w-[380px] h-[490px] bg-white flex flex-col p-5'>
    <Image src={blogImg3} style={{width:"350px", height:"320px"}}></Image>
    <div className='flex justify-between pt-5 pb-5'><div className='flex gap-4 items-center'><RiContactsLine className='text-blue-600 text-[22px]'/><p className='text-gray-700'>By Admin</p> </div><div className='flex items-center gap-2'> <AiOutlineMessage className='text-blue-600 text-[24px]'/><p className='text-gray-700'>12 Comments</p></div></div>
    <p className='text-2xl font-semibold text-gray-800  '>Easy & Most Powerful Server and Platform.</p>
    <div className='flex justify-between items-center'><p className='text-blue-600 text-lg font-semibold pt-5 '>Learn more</p><FaArrowRightLong  className='text-blue-700'/></div>
    </div>
      </div>
      </div>
);
export default Blogs;