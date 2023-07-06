import PeopleNearMe from "@/components/PeopleNearMe";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import BookReviews from "@/components/BookReviews";

const ProductDetails = () => {
  return (
    <div className="w-full md:pt-20 md:pb-16 ">
      <Wrapper>
        <div className="">
          {/* book Image and Titles section start */}
          <section className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <div className=" flex gap-10">
              <div>
                <div
                  className="transform w-[390px] h-[427px] flex items-center justify-center  overflow-hidden bg-[#F6F6F6] "
                  href="/product/1"
                >
                  <div>
                    <img
                      className=" w-[214px] h-[324px]"
                      alt="product book image"
                      src="/assets/atomic-book.png"
                    ></img>

                    <div className="w-8 h-8 rounded-full justify-center items-center flex  bg-white absolute top-2 right-2 ">
                      <IoMdHeartEmpty className="relative  text-[15px] md:text-[18px] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
              {/* title, details and button start*/}
              <div className="gap-16 flex flex-col justify-center pt-4 pl-8">
                <section className="flex flex-col justify-center ">
                  <div class="w-[186px] h-[49px] text-black text-[32px] font-semibold">
                    Make Time
                  </div>
                  <div class="w-[236px] h-[63px] text-black text-[16px] font-normal -mb-4">
                    By Jake Knapp, John Zeratsky
                    <br />
                  </div>
                  <div className="flex gap-8">
                    <div class="text-black text-[24px] font-normal">4.5 </div>
                    <div class="text-black text-[13px] font-normal underline">
                      (17 reviews)
                    </div>
                  </div>
                </section>
                <div>
                  <button className="shadow-sm w-[263px] h-[66px] bg-[#228D5A] rounded-xl transform hover:scale-105 duration-300 ease-in-out">
                    <div class="w-[245.54px] text-center text-[#FFF1F1] text-[24px] font-semibold">
                      5 Books Available
                    </div>
                  </button>
                </div>
              </div>
              {/* title, details and button end*/}
            </div>
          </section>
          {/* book Image and Titles section end */}

          {/* Synopsis section start */}
          <section className="my-8">
            <div class="w-[245px] h-[31px] text-black text-[24px] font-semibold">
              Synopsis
            </div>
            <div class="w-full  text-black text-[16px] font-normal">
              Nobody ever looked at an empty calendar and said, "The best way to
              spend this time is by cramming it full of meetings!" or got to
              work in the morning and thought, Today I'll spend hours on
              Facebook! Yet that's exactly what we do. Why? <br />
              <br />
              In a world where information refreshes endlessly and the workday
              feels like a race to react to other people's priorities faster,
              frazzled and distracted has become our default position. But what
              if the exhaustion of constant busyness wasn't mandatory? What if
              you could step off the hamster wheel and start taking control of
              your time and attention? That's what this book is about.
            </div>
          </section>
          <div class="w-[851px] h-[0px] border border-[#E3E3E3] mx-auto"></div>
          {/* Synopsis section end */}

          {/* Book Swap Near Me section Component Start*/}
          <section className="my-12">
            <div class="w-80 h-[31px] text-black text-[24px] font-semibold">
              Book Swaps Near Me
            </div>
          </section>
          <section>
            {/* book nearme Component start*/}
            <PeopleNearMe></PeopleNearMe>
            {/* book nearme Component end */}
          </section>
          {/* Book Swap Near Me section End*/}

          <section className="mt-12">
            <div class="w-[851px] h-[0px] border border-[#E3E3E3] mx-auto "></div>
            <div className="w-[245px] h-[31px] text-black text-[24px] font-semibold py-8 mt-4">
              Book Reviews
            </div>
            <div className="flex justify-center items-center pt-4">
              <BookReviews></BookReviews>
            </div>
          </section>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
