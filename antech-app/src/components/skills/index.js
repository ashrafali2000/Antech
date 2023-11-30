import Image from "next/image"
import aboutImg1 from "../../../public/images/about5-t1.png"
import aboutImg2 from "../../../public/images/about5-t2.png"
import aboutImg3 from "../../../public/images/about5-t3.png"

export default function Skills() {
    return (
      
            <div className="flex pb-4 md:pb-24 flex-wrap gap-32 mx-auto justify-center  bg-gray-100 ">
                
            <div className="flex hidden  lg:inline-flex items-center space-x-6 lg:space-x-8 ">
                   
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      
                        <div className="h-64 w-50 overflow-hidden rounded-lg">
                          <Image
                            src={aboutImg1}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-60 overflow-hidden rounded-lg">
                          <Image
                            src={aboutImg2}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-80 w-60 overflow-hidden rounded-lg">
                          <Image
                         src={aboutImg3}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                       
                      </div>
                    </div> 
                    {/* Right container */}
                 <div className="md:pt-8 pb-24">
<p className="text-lg text-blue-500">Our Skills</p>
<p className=" text-4xl md:text-5xl font-semibold w-[330px] md:w-[500px] ">
We Are Increasing Business Success With Technology
</p>
<div className="flex flex-col gap-5 pt-5">

<div className="flex flex-col gap-3">
    <div className="flex justify-between">
    <p>Software Development</p>
        <p>65%</p>
    </div>
    <div className="flex ">
    <div className="w-[300px] h-1 md:w-[400px] md:h-1 bg-blue-500"></div>
    <div className="w-[100px] h-1  md:w-[100px] md:h-1 bg-blue-300"></div>
    </div>
</div>
<div className="flex flex-col gap-3">
    <div className="flex justify-between">
    <p>UL / UX Design</p>
        <p>60%</p>
    </div>
    <div className="flex ">
    <div className="w-[260px] h-1  md:w-[360px] md:h-1 bg-blue-500"></div>
    <div className="w-[130px] h-1 md:w-[130px] md:h-1 bg-blue-300"></div>
    </div>
</div>
<div className="flex flex-col gap-3">
    <div className="flex justify-between">
    <p>Web Developmentt</p>
        <p>65%</p>
    </div>
    <div className="flex ">
    <div className="w-[300px] h-1 md:w-[400px] md:h-1 bg-blue-500"></div>
    <div className="w-[90px] h-1 md:w-[100px] md:h-1 bg-blue-300"></div>
    </div>
</div>
</div>
                </div>
            </div>
        
    )
}