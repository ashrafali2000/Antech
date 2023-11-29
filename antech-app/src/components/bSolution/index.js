import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import aboutImg1 from "../../../public/images/about4-t1.png"
import aboutImg2 from "../../../public/images/about4-t2.png"
import aboutImg3 from "../../../public/images/about4-t3.png"
import feature1 from "../../../public/images/feature5-31.png"

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
    return(
        <div className="pt-20 px-16 bg-blue-500 mt-32">
 <p className="text-white text-2xl  text-center">Technology solutions</p>
 <p className="text-white text-5xl font-semibold  text-center mt-3">We Provide IT & Business Solutions
 </p>
        <Carousel className="mt-16"
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

       <div className="bg-white p-10 w-[360px] h-[380px] ">
       <Image 
          className="md:w-[250px] md:h-[200px] w-[200px] h-[200px] relative object-cover object-center"
          src={imagesUrlShirts[0].url}
          />
          <div className="absolute bt-white rounded-full p-5">
          <Image src={feature1} ></Image>
          </div>
          <p className="text-3xl font-semibold py-3">Network Protection</p>
          <p>This is our sKielse adn dsfdsf dsfsdosdf sksdjfosd afjodsjf  dsfjo dsfkdshfio sdfhiosdo</p>
        </div> 
       <div className="bg-white p-10 w-[360px] h-[380px] ">
       <Image 
          className="md:w-[250px] md:h-[200px] w-[200px] h-[200px]  object-cover object-center"
          src={imagesUrlShirts[1].url}
          />
          <p className="text-3xl font-semibold py-3">Product Development</p>
          <p>This is our sKielse adn dsfdsf dsfsdosdf sksdjfosd afjodsjf  dsfjo dsfkdshfio sdfhiosdo</p>

        </div> 
       <div className="bg-white p-10 w-[360px] h-[380px] ">
       <Image
          className="md:w-[250px] md:h-[200px] w-[200px] h-[200px]  object-cover object-center"
          src={imagesUrlShirts[2].url}
          />
          <p className="text-3xl font-semibold py-3">Digital Marketing</p>

          <p>This is our sKielse adn dsfdsf dsfsdosdf sksdjfosd afjodsjf  dsfjo dsfkdshfio sdfhiosdo</p>

        </div> 
       <div className="bg-white p-10 w-[360px] h-[380px] ">
       <Image
          className="md:w-[250px] md:h-[200px] w-[200px] h-[200px]  object-cover object-center"
          src={imagesUrlShirts[3].url}
          />
          <p className="text-3xl font-semibold py-3">User Research</p>

          <p>This is our sKielse adn dsfdsf dsfsdosdf sksdjfosd afjodsjf  dsfjo dsfkdshfio sdfhiosdo</p>

        </div> 
       <div className="bg-white p-10 w-[360px] h-[380px] ">
       <Image
          className="md:w-[250px] md:h-[200px] w-[200px] h-[200px]  object-cover object-center"
          src={imagesUrlShirts[1].url}
          />
          <p className="text-3xl font-semibold py-3">SEM Research</p>

          <p>This is our sKielse adn dsfdsf dsfsdosdf sksdjfosd afjodsjf  dsfjo dsfkdshfio sdfhiosdo</p>

        </div> 
       <div className="bg-white p-10 w-[360px] h-[380px] ">
       <Image
          className="md:w-[250px] md:h-[200px] w-[200px] h-[200px]  object-cover object-center"
          src={imagesUrlShirts[2].url}
          />
          <p className="text-3xl font-semibold py-3">Product Summery</p>

          <p>This is our sKielse adn dsfdsf dsfsdosdf sksdjfosd afjodsjf  dsfjo dsfkdshfio sdfhiosdo</p>

        </div> 
      </Carousel>
        </div>
    )
}


//   <div><Image src={aboutImg1}>
//     </Image></div>
//   <div><Image src={aboutImg2}>
//     </Image></div>
//   <div><Image src={aboutImg3}>
//     </Image></div>
//   <div><Image src={aboutImg1}>
//     </Image></div>