import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Wrapper from "./Wrapper";

const BookReviews = () => {
  return (
    <div>
      <Wrapper>
        <div className="w-[900px] h-full p-2 bg-[#F3F3F3] rounded-md">
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
                <img
                  className="h-6 w-6"
                  src="/assets/goldenstar.svg"
                  alt="Golden Star"
                ></img>
                <img
                  className="h-6 w-6"
                  src="/assets/goldenstar.svg"
                  alt="Golden Star"
                ></img>
              </div>
              <div className="text-black text-[16px] font-semibold pl-4">
                This book changed my life - user324
              </div>
              <div className="w-full px-2 text-black text-[16px] font-normal pl-4 pb-4">
                "Make Time" is a game-changer in the world of productivity and
                personal well-being. Jake Knapp and John Zeratsky have crafted
                an exceptional guide that offers practical strategies and
                insightful advice on how to reclaim control of our time and live
                more intentionally.
              </div>
            </div>
            <div className="flex flex-col justify-start text-start ">
              <div className="flex flex-row justify-start mr-auto p-4 gap-1">
                <img
                  className="h-6 w-6"
                  src="/assets/goldenstar.svg"
                  alt="Golden Star"
                ></img>
                <img
                  className="h-6 w-6"
                  src="/assets/goldenstar.svg"
                  alt="Golden Star"
                ></img>
              </div>
              <div className="text-black text-[16px] font-semibold pl-4">
                This book changed my life - user324
              </div>
              <div className="w-[634px] text-black text-[16px] font-normal pl-4 pb-4">
                "Make Time" is a game-changer in the world of productivity and
                personal well-being. Jake Knapp and John Zeratsky have crafted
                an exceptional guide that offers practical strategies and
                insightful advice on how to reclaim control of our time and live
                more intentionally.
              </div>
            </div>

            {/* carousel slide start */}
          </Carousel>
        </div>
      </Wrapper>
    </div>
  );
};

export default BookReviews;
