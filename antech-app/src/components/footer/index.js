import Image from "next/image";
import blogImg1 from "../../../public/images/post-thumb-1.png"
import blogImg2 from "../../../public/images/post-thumb-2.png"
import blogImg3 from "../../../public/images/post-thumb-3.png"
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer(){
    return(<div className="bg-black pt-20 pr-20 pl-20 pb-5 ">

<div className="flex flex-wrap justify-between">
        <div className="w-80">
        <img className="h-12 w-auto" src="https://quomodothemes.website/html/antech/assets/images/logos/logo-blue.svg" alt="" />
    <p className="text-2xl text-gray-400 wA-auto font-semibold">There are many variatons of pass Ipsum available, but the majority alteration in some form, by inject randomised words</p>
        </div>

        <div className="w-60 flex flex-col gap-1">
            <p className="text-3xl font-bold text-white pb-4">Quick Links</p>
            <a className="text-lg font-semibold text-gray-400 cursor-pointer hover:text-white">Terms & Conditions</a>
            <a className="text-lg font-semibold text-gray-400 cursor-pointer hover:text-white">
About Company</a>
            <a className="text-lg font-semibold text-gray-400 cursor-pointer hover:text-white">Payment Gatway</a>
            <a className="text-lg font-semibold text-gray-400 cursor-pointer hover:text-white">
Business Suppor</a>
            <a className="text-lg font-semibold text-gray-400 cursor-pointer hover:text-white">
            Apps Development</a>
        </div>

        <div className="w-80 flex flex-col gap-1">
            <p className="text-3xl font-bold text-white pb-4">Latest News</p>
            <div className="flex flex-col gap-4 pt-2">
                
                <div className="flex items-start gap-2">
              <Image src={blogImg1} width={100} height={100}/> 
              <div>
               <p className="text-lg font-semibold text-gray-400 cursor-pointer hover:text-white"> Thoughtful man using laptop pondering</p>
              <div className="flex gap-4 "> <FaCalendarAlt  className="text-blue-500 "/><p className=" text-gray-300 text-sm">24 November 2023</p></div> 
              </div>
                </div>
                <div className="flex items-start gap-4">
              <Image src={blogImg2} width={100} height={100}/> 
              <div>
               <p className="text-lg font-semibold text-gray-400 cursor-pointer hover:text-white"> Thoughtful man using laptop pondering</p>
              <div className="flex gap-4 "> <FaCalendarAlt  className="text-blue-500 "/><p className=" text-gray-300 text-sm">24 November 2023</p></div> 
              </div>
                </div>
            </div>
        </div>


        <div className="w-60">
        <p className="text-3xl font-bold text-white pb-4">Contact Us</p>  
        <div className="flex gap-3 items-center">
        <FaPhone className="text-blue-500" /> <p className="text-lg font-semibold text-gray-400">+923334455</p>
        </div>
        <div className="flex gap-3 items-center">
        <MdEmail className="text-blue-500"/> <p className="text-lg font-semibold text-gray-400">ali482271@gmail.com</p>
        </div>
        <div className="flex gap-3 items-center">
        <IoLocation className="text-blue-500" />

        <p className="text-lg font-semibold text-gray-400">Karachi, pakistan</p>
        </div>
        </div>

        </div>
        <hr className="w-full  bg-gray-600 mt-8"/>
        <div className="flex flex-wrap justify-center md:justify-between pt-5 md:mx-32">
            <p className="text-lg  text-gray-400">2022 © All rights reserved by QuomodoTheme</p>
            <p  className="text-lg  text-gray-400" >Privacy Policy |
Terms & Condit ions</p>
        </div>
    </div>)
}