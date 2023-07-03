// import React from "react";

// const HeroBanner = () => {
//   return (
//     <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto ">
//       <div>
//         <img
//           src="assets/hero-image.png"
//           className=""
//         />
//         {/* <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
//           ExChange Now
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto ">
      <div>
        <img
          src="assets/hero.svg"
          className="aspect-[16/10] md:aspect-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
