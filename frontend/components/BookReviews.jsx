import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Wrapper from "./Wrapper";

const BookReviews = ({ data }) => {
  return (
    <div>
      <Wrapper>
        <div className="md:w-[900px] h-full p-2 bg-[#F3F3F3] rounded-md">
          <Carousel
            className="clientCarousel"
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
          >
            {/* carousel slide start */}

            <div className="flex flex-col justify-start text-start ">
              <div className="flex flex-row justify-start mr-auto p-4 gap-1">
                {/* star rating looping */}
                {Array.from({ length: data?.rating }, (_, index) => (
                  <img
                    key={index}
                    className="h-6 w-6"
                    src="/assets/goldenstar.svg"
                    alt="Golden Star"
                  />
                ))}
              </div>
              <div className="text-black text-[16px] font-semibold pl-4">
                {data?.quote} - {data?.user?.name}
              </div>
              <div className="md:w-full px-2 text-black text-[16px] font-normal pl-4 pb-4">
                {data?.review}
              </div>
            </div>

            {/* carousel slide end */}
          </Carousel>
        </div>
      </Wrapper>
    </div>
  );
};

export default BookReviews;
