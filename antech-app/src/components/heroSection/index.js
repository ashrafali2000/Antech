import Image from "next/image";
export default function HeroSection() {

    return (
      
      <div className="relative overflow-hidden bg-gray-200 ">
        <div className="pb-32 md:pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg md:pl-16 pl-8">
                <p className="text-blue-600 text-[40px]">IT services Agency</p>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Awesome IT Services for Your Business
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              There are many variations of passage of Lorem Ipsu available our but the majority have suffered alteration
              </p>
            </div>
            <div>
              <div className="mt-10 md:pl-16 pl-8">
                {/* Decorative image grid */}
               
                  <div className="absolute pr-24 transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 hidden md:block">
                       <Image  src="https://quomodothemes.website/html/antech/assets/images/hero-img/3.webp"
                            alt="Hero1 Image"
                            width={400}
                            height={400}
                            className="h-full w-full object-cover object-center"
                   />
               
                </div>
  
                <a
                  href="#"
                  className="inline-block  rounded-full border border-transparent bg-sky-600 text-lg hover:bg-purple-700 px-8 py-3 text-center font-medium text-white hover:bg--700"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  