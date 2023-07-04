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
import Wrapper from "./Wrapper";

const HeroBanner = () => {
  return (
    <div className="bg-black  w-full max-w-[1360px] mx-auto  flex-row flex mt-8">
      <section className="bg-[#F6F6F6] flex items-center justify-center w-1/2 h-[350px] flex-col gap-8">
        <div className="">
          <div className="text-[#228D5A] text-[40px] font-semibold mb-4">
            Beach Must Reads
          </div>
          <div className="text-green-600 text-[20px] font-medium">
            Find your ideal summer read
          </div>
        </div>
        <div>
          <button className="w-[184px] h-[66px] relative hover:scale-105 ease-in-out duration-300">
            <div className="w-[184px] h-[66px]  bg-[#228D5A] rounded-xl shadow" />
            <div className="left-[31px] top-[18px] absolute text-[#FFF1F1] text-[24px] font-semibold">
              Swap Now
            </div>
          </button>
        </div>
      </section>
      <section className="bg-[#F5B961] w-1/2 h-[350px] flex justify-center items-center flex-shrink">
        <img src="/assets/hero-books.svg" alt="books image" />
      </section>
    </div>
  );
};

export default HeroBanner;
