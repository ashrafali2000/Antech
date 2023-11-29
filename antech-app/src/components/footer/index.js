import Image from "next/image";

export default function Footer(){
    return(<div className="bg-black p-20 ">

<div className="flex justify-between">
        <div>
            <Image src={""}></Image>
    <p className="text-2xl text-gray-400 w-[400px] font-semibold">There are many variatons of pass Ipsum available, but the majority alteration in some form, by inject randomised words</p>
        </div>

        <div>
            <p className="text-3xl font-bold text-white">Quick Links</p>
            <p className="text-lg font-semibold text-gray-400">Terms & Conditions
About Company
Payment Gatway
Business Support
Apps Development</p>
        </div>

        <div>
            <p className="text-3xl font-bold text-white">Latest News</p>
            <div>
                <p className="text-lg font-semibold text-gray-400"> Thoughtful man using laptop pondering</p>
                <p className="text-lg font-semibold text-gray-400"> Young man with a lap top in a business</p>
            </div>
        </div>


        <div>
        <p className="text-3xl font-bold text-white">Contact Us</p>  
        <p className="text-lg font-semibold text-gray-400">+923334455</p>
        <p className="text-lg font-semibold text-gray-400">ali482271@gmail.com</p>
        <p className="text-lg font-semibold text-gray-400">Karachi, pakistan</p>
        </div>

        </div>
        <hr className="w-full  bg-gray-600 mt-5"/>
        <div className="flex justify-between pt-5 mx-32">
            <p className="text-lg  text-gray-400">2022 © All rights reserved by QuomodoTheme</p>
            <p  className="text-lg  text-gray-400" >Privacy Policy |
Terms & Condit ions</p>
        </div>
    </div>)
}