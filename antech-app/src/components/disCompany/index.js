
import aboutImg1 from "../../../public/images/about4-t1.png"
import aboutImg2 from "../../../public/images/about4-t2.png"
import aboutImg3 from "../../../public/images/about4-t3.png"
import icon1 from "../../../public/images/globe-icon-blue.png"
import icon2 from "../../../public/images/network-icon-blue.png"
import Image from "next/image"
export default function DisCompany() {
    return (
      <div className="relative overflow-hidden bg-gray-100 px-8">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
            <p className="text-blue-600 text-[40px]">IT services Agency</p>
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Bringing New IT Business Solutions And Ideas
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                if you live or die.
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
            <div 
            // style={{
            //     backgroundImage:`url(${bgImage})`,
            //         backgroundSize: 'cover',  
            //         backgroundRepeat: 'no-repeat',
            //         width: '100%',
            //         height: '300px',
            // }}
            >
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        
                        
                      </div>
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
                            src={aboutImg3}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-80 w-44 overflow-hidden rounded-lg">
                          <Image
                         src={aboutImg2}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
  
             
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  