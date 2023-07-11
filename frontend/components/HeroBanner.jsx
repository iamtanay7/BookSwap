import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import Wrapper from "./Wrapper";

const HeroBanner = () => {
  return (
    <div className="bg-black  w-full md:max-w-[1360px] mx-auto flex-col md:flex-row flex mt-8">
      <section className=" bg-[#F6F6F6] md:flex items-center justify-center md:w-1/2 h-[200px] md:h-[350px] flex-col gap-8">
        <div className="pt-4 md:pt-0">
          <div className="text-[#228D5A] pt-4 md:pt-0 text-[30px] text-center  md:text-[40px] font-semibold mb-4">
            Beach Must Reads
          </div>
          <div className="text-green-600 md:text-[20px] text-md text-center font-medium">
            Find your ideal summer read
          </div>
        </div>
        <div className="text-center pt-4 md:pt-4">
          <button className=" md:w-[184px] md:h-[66px] relative hover:scale-105 ease-in-out duration-300">
            <div className="w-[184px] h-[66px]  bg-[#228D5A] rounded-xl shadow" />
            <div className="md:left-[31px] left-12 top-5 md:top-[18px] absolute text-[#FFF1F1] md:text-[24px] font-semibold">
              Swap Now
            </div>
          </button>
        </div>
      </section>
      <section className="bg-[#F5B961] h-[220px]  md:w-1/2 md:h-[350px] flex justify-center items-center flex-shrink">
        <img
          className="px-2 md:px-0"
          src="/assets/hero-books.svg"
          alt="books image"
        />
      </section>
    </div>
  );
};

export default HeroBanner;
