
import aboutImg1 from "../../../public/images/about4-t1.png"
import aboutImg2 from "../../../public/images/about4-t2.png"
import aboutImg3 from "../../../public/images/about4-t3.png"
import icon1 from "../../../public/images/globe-icon-blue.png"
import icon2 from "../../../public/images/network-icon-blue.png"
import Image from "next/image"
export default function DisCompany() {
    return (
      <div className="relative overflow-hidden bg-gray-100 px-8">
        <div className="pb-16 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto  flex flex-wrap justify-center lg:gap-40  max-w-7xl px-4  sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
            <p className="text-blue-600 text-[24px] ">Discover Our Company</p>
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Bringing New IT Business Solutions And Ideas
              </h1>
              <p className="mt-4 text-xl text-gray-500 ">
              There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form, by injecte humour, or randomised words which
              </p>
            <div className="relative flex mt-2">
                <div className="flex  w-50 items-center">
                <div  className="w-22 flex  h-22 rounded-full  left-8 top-6
            items-center justify-center  
            bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-8">
                <Image src={icon2}></Image>
                </div>
                <p className="text-xl font-semibold">Website Development</p>
                </div>
                <div className="flex  w-50 items-center">
                <div className="w-22 flex  h-22 rounded-full  left-60 top-6
            items-center justify-center  
            bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-8" >
               <Image src={icon1}></Image>
                </div>
               <p className="text-xl font-semibold">Internal Networking
               </p>
                </div>
            </div>
            <a
                  href="#"
                  className="inline-block mt-16 shadow-lg shadow-blue-300  rounded-full border border-transparent bg-sky-600 text-lg hover:bg-purple-700 px-8 py-3 text-center font-medium text-white hover:bg--700"
                >
                  Learn more
                </a>
            </div>
           
            
                
              
                
                    <div className="flex items-center space-x-6 lg:space-x-8 pt-16 md:pt-5">
                 
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      
                        <div className="h-74 w-60  overflow-hidden rounded-lg">
                          <Image
                            src={aboutImg1}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-60 overflow-hidden rounded-lg">
                          <Image
                            src={aboutImg3}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-80 w-80overflow-hidden rounded-lg">
                          <Image
                         src={aboutImg2}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div> 
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    )
  }
  