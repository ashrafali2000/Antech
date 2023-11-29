import aboutImg13 from "../../../public/images/tes-thumb.png"
import commetnsRight from "../../../public/images/tes-quote-right.png"
import commetnsLeft from "../../../public/images/tes-quote-left.png"
import aboutImg1 from "../../../public/images/about4-t1.png"
import aboutImg2 from "../../../public/images/about4-t2.png"
import aboutImg3 from "../../../public/images/about4-t3.png"

import Image from "next/image";
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const OurClients = () => (
 <div className="bg-gray-200 flex flex-wrap  sm:gap-16 md:gap-80 pt-32 pb-32">
  <div className="pl-32 pt-20">
  <p className="text-blue-600 text-2xl">Testimonial</p>
  <p className="font-semibold text-4xl pb-5">Our Cliendts Say</p>
  <Image src={commetnsLeft}></Image>
  <p className="text-gray-700 text-sm w-80">ther are some cgffg vxfv dfdfgfdfg gfdgdfg ffdgfg fffgfg gfghdfg fgfgg utyugj gfgfg ff fgdfg sdfsdffdf  omments here and the lag fdfk sdfdkj coodf sdffjio dis kdfdsfk dfdfi</p>
    <Image src={commetnsRight}></Image>
  <div className="flex gap-5 pt-8">
   <Image src={aboutImg13} className="w-24 h-24 rounded-full"></Image>
   <div>
    <p className="text-blue-500 text-2xl font-semibold">Jassen Thank</p>
    <p className="text-gray-600 text-lg">Jassen Thank</p>
   </div>
  </div>
  </div>
  {/* Right div */}


             <div className="flex flex-col flex-wrap">
              <div className="flex">
             <Image src={aboutImg13} className="w-60 h-60 rounded-full"></Image>
             <Image src={aboutImg13} className="w-32 h-32 rounded-full"></Image>
              </div>
              <div className="flex">
             <Image src={aboutImg13} className="w-24 h-24 rounded-full"></Image>
             <Image src={aboutImg13} className="w-60 h-60 rounded-full"></Image>
              </div>
              </div>   
              
                   
            
  
    </div>
);
export default OurClients