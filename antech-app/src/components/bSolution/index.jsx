import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import aboutImg1 from "../../../public/images/about4-t1.png"
import aboutImg2 from "../../../public/images/about4-t2.png"
import aboutImg3 from "../../../public/images/about4-t3.png"
import feature1 from "../../../public/images/feature5-31.png"
import portFolio1 from "../../../public/images/portfolio-1.jpg"
import portFolio2 from "../../../public/images/portfolio-2.jpg"
import portFolio3 from "../../../public/images/portfolio-3.jpg"
import portFolio4 from "../../../public/images/portfolio-4.jpg"
import portFolio5 from "../../../public/images/portfolio-5.jpg"


const imagesUrlShirts = [
  {
    url: aboutImg1,
  },
  {
    url: aboutImg2,
  },
  {
    url: aboutImg3,
  },
  {
    url: aboutImg2,
  },
];
const imagesPortFolio = [
  {
    url: portFolio1,
  },
  {
    url: portFolio2,
  },
  {
    url: portFolio3,
  },
  {
    url: portFolio4,
  },
  {
    url: portFolio5,
  },
];
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default function Bsolution() {
  return (
    <div className="relative">
      <div className="pt-20 px-16 bg-blue-500 pb-40 mt-32">
        <p className="text-white text-2xl  text-center">Technology solutions</p>
        <p className="text-white text-5xl font-semibold  text-center mt-3">We Provide IT & Business Solutions
        </p>
        <Carousel className="mt-16 mx-auto"
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
        >
          {/* {imagesUrlShirts.map((img) => (
          <div key={Math.random()} className="bg-white p-10 flex gap-20">
          </div>
        ))} */}

          <div className="bg-white p-10 w-[360px] h-[460px] group transition-all">
            <Image
              className="md:w-[250px] md:h-[200px] w-[200px] h-[200px] relative object-cover object-center"
              src={imagesUrlShirts[0].url}
            />
            <div className="transition-transform transform  group-hover:bg-white-500 hover:text-white w-22 flex  h-22 absolute rounded-full  left-28 top-48
            items-center justify-center  
            bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-6" >
              <Image src={feature1} ></Image>
            </div>
            <p className="text-3xl font-semibold py-3 group-hover:text-blue-600 mt-12">Network Protection</p>
            <p>This is our sKielse adn dsfdsf dsfsdosdf sksdjfosd afjodsjf  dsfjo dsfkdshfio sdfhiosdo</p>
          </div>
          <div className="bg-white p-10 w-[360px] h-[460px] ">
            <Image
              className="md:w-[250px] md:h-[200px] w-[200px] h-[200px] relative  object-cover object-center"
              src={imagesUrlShirts[1].url}
            /><div className="w-22 flex  h-22 absolute rounded-full  left-28 top-48
          items-center justify-center  
          bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-6" >
              <Image src={feature1}></Image>
            </div>
            <p className="text-3xl font-semibold py-3 mt-12">Product Development</p>
            <p>This is our sKielse adn dsfdsf dsfsdosdf sksdjfosd afjodsjf  dsfjo dsfkdshfio sdfhiosdo</p>

          </div>
          <div className="bg-white p-10 w-[360px] h-[460px] ">
            <Image
              className="md:w-[250px] md:h-[200px] w-[200px] h-[200px] relative  object-cover object-center"
              src={imagesUrlShirts[2].url}
            />
            <div className="w-22 flex  h-22 absolute rounded-full  left-28 top-48
            items-center justify-center  
            bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-6" >
              <Image src={feature1}></Image>
            </div>
            <p className="text-3xl font-semibold py-3 mt-12">Digital Marketing</p>

            <p>This is our sKielse adn dsfdsf dsfsdosdf sksdjfosd afjodsjf  dsfjo dsfkdshfio sdfhiosdo</p>

          </div>
          <div className="bg-white p-10 w-[360px] h-[460px] ">
            <Image
              className="md:w-[250px] md:h-[200px] w-[200px] h-[200px] relative object-cover object-center"
              src={imagesUrlShirts[3].url}
            />
            <div className="w-22 flex  h-22 absolute rounded-full  left-28 top-48
            items-center justify-center  
            bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-6" >
              <Image src={feature1}></Image>
            </div>
            <p className="text-3xl font-semibold py-3 mt-12">User Research</p>

            <p>This is our sKielse adn dsfdsf dsfsdosdf sksdjfosd afjodsjf  dsfjo dsfkdshfio sdfhiosdo</p>

          </div>
          <div className="bg-white p-10 w-[360px] h-[460px] ">
            <Image
              className="md:w-[250px] md:h-[200px] w-[200px] h-[200px]  relatve object-cover object-center"
              src={imagesUrlShirts[1].url}
            />
            <div className="w-22 flex  h-22 absolute rounded-full  left-28 top-48
            items-center justify-center  
            bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-6" >
              <Image src={feature1}></Image>
            </div>
            <p className="text-3xl font-semibold py-3 mt-12">SEM Research</p>

            <p>This is our sKielse adn dsfdsf dsfsdosdf sksdjfosd afjodsjf  dsfjo dsfkdshfio sdfhiosdo</p>

          </div>
          <div className="bg-white p-10 w-[360px] h-[460px] ">
            <Image
              className="md:w-[250px] md:h-[200px] w-[200px] h-[200px] relative object-cover object-center"
              src={imagesUrlShirts[2].url}
            />
            <div className="w-22 flex  h-22 absolute rounded-full  left-28 top-48
            items-center justify-center  
            bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-6" >
              <Image src={feature1}></Image>
            </div>
            <p className="text-3xl font-semibold py-3 mt-12">Product Summery</p>

            <p>This is our sKielse adn dsfdsf dsfsdosdf sksdjfosd afjodsjf  dsfjo dsfkdshfio sdfhiosdo</p>

          </div>
        </Carousel>
      </div>
      {/* Project Counter */}
      <div className="bg-gray-200">
        <div className=" px-16 bg-white pb-5  mx-16 pt-10 flex flex-wrap  gap-32 justify-center">
          <div className="relative flex ">
            <div className="-ml-14 md:me-28 -mt-3 transform  w-22 flex  h-22 absolute rounded-full 
            items-center justify-center  
            bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-6" >
              <Image src={feature1} ></Image>
            </div>
            <div>
              <p className="text-2xl md:text-2xl font-bold ml-10">2547+</p>
              <p className="md:text-2xl text-md  ml-12">Project Done</p>
            </div>
          </div>
          <div className="relative flex">
            <div className=" -ml-14 md:me-28 -mt-3  w-22 flex  h-22 absolute rounded-full 
            items-center justify-center  
            bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-6" >
              <Image src={feature1} ></Image>
            </div>
            <div>
              <p className="text-2xl md:text-2xl font-bold ml-10">8255+</p>
              <p className="md:text-2xl text-md  ml-12">Active Clients</p>
            </div>
          </div>
          <div className="relative flex">
            <div className="-ml-14 md:me-28 -mt-3  w-22 flex  h-22 absolute rounded-full 
            items-center justify-center  
            bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-6" >
              <Image src={feature1} ></Image>
            </div>
            <div>
              <p className="text-2xl md:text-2xl font-bold ml-10">12+</p>
              <p className="md:text-2xl text-md  ml-12">Glorious Years</p>
            </div>
          </div>
          <div className="relative flex">
            <div className="-ml-14 md:me-28 -mt-3 hover:text-white w-22 flex  h-22 absolute rounded-full 
            items-center justify-center  
            bg-white text-gray-700  font-bold shadow-lg shadow-blue-200 p-6" >
              <Image src={feature1} ></Image>
            </div>
            <div>
              <p className="text-2xl md:text-2xl font-bold ml-10">894+</p>
              <p className="md:text-2xl text-md  ml-12">Project Win</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Carsoal */}
      <div className=" px-16  bg-gray-100 pb-40">
        <Carousel className="mt-16"
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}

          infinite={true}
          partialVisible={false}
        >

          <div className="bg-white flex justify-center items-center  w-[360px] h-[430px] group transition-all">
            <Image
              className="w-full h-full relative object-cover object-center"
              src={imagesPortFolio[0].url}
            />
          </div>
          <div className="bg-white w-[360px] h-[430px] group transition-all">
            <Image
              className="w-full h-full relative object-cover object-center"
              src={imagesPortFolio[1].url}
            />
          </div>
          <div className="bg-white w-[360px] h-[430px] group transition-all">
            <Image
              className="w-full h-full relative object-cover object-center"
              src={imagesPortFolio[2].url}
            />
          </div>
          <div className="bg-white  w-[360px] h-[430px] group transition-all">
            <Image
              className="w-full h-full relative object-cover object-center"
              src={imagesPortFolio[3].url}
            />
          </div>
          <div className="bg-white  w-[360px] h-[430px] group transition-all">
            <Image
              className="w-full h-full relative object-cover object-center"
              src={imagesPortFolio[4].url}
            />
          </div>

        </Carousel>
      </div>
    </div>
  )
}


