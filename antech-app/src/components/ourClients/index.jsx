import aboutImg13 from "../../../public/images/tes-thumb.png"
import commetnsRight from "../../../public/images/tes-quote-right.png"
import commetnsLeft from "../../../public/images/tes-quote-left.png"

import { LiaStarSolid } from "react-icons/lia";

import Image from "next/image";

const OurClients = () => (
 <div className="bg-sky-100 flex flex-wrap justify-center items-center gap-16 md:gap-20 pt-16 md:pt-32 pb-32">
  <div className="md:-mt-16">
  <p className="text-blue-600 text-2xl">Testimonial</p>
  <p className="font-semibold text-5xl pb-5">Our Clients Say</p>
  <Image src={commetnsLeft}></Image>
  <p className="text-gray-700 text-sm md:w-80  w-60 md:w-[500px] " >ther are `bcvbcv ghgfh fhgfh hghgf gg fhyfgh hgfhg hghgh some cgffg vxfv dfdfgfdfg gfdgdfg ffdgfg fffgfg gfghdfg fgfgg utyugj gfgfg ff fgdfg sdfsdffdf  omments here and the lag fdfk sdfdkj coodf sdffjio dis kdfdsfk dfdfi</p>
    <Image src={commetnsRight}></Image>
  <div className="flex gap-5 pt-8">
   <Image src={aboutImg13} className="w-24 h-24 rounded-full"></Image>
   <div>
    <p className="text-blue-500 text-2xl font-semibold">Jassen Thank</p>
    <p className="text-gray-600 text-lg">Rounder of Antech</p>
    <div className="flex">
    <LiaStarSolid className="text-yellow-500 text-[25px]"/>
    <LiaStarSolid className="text-yellow-500 text-[25px]"/>
    <LiaStarSolid  className="text-yellow-500 text-[25px]"/>
    <LiaStarSolid  className="text-yellow-500 text-[25px]"/>
    </div>
   </div>
  </div>
  </div>

  {/* Right div */}
             <div className="flex flex-col flex-wrap ">
             <img src="https://quomodothemes.website/html/antech/assets/images/thumbs/testimonial-area-thumb.webp"  className="w-[360px] h-[360px] md:w-[500px] md:h-[500px]" />
              </div>   
              
                   
            
  
    </div>
);
export default OurClients