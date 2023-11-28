import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import aboutImg1 from "../../../public/images/about4-t1.png"
import aboutImg2 from "../../../public/images/about4-t2.png"
import aboutImg3 from "../../../public/images/about4-t3.png"

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
        <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
      >
        {imagesUrlShirts.map((img) => (
          <div key={Math.random()}>
            <Image
              className="md:w-[300px] md:h-[300px] w-[200px] h-[200px]  object-cover object-center"
              src={img.url}
            />
          </div>
        ))}
      </Carousel>
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