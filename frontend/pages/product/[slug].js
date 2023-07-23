import PeopleNearMe from "@/components/PeopleNearMe";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import BookReviews from "@/components/BookReviews";
import { useState } from "react";
import { fetchDataFromApi } from "@/utils/api";

import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const id = router.query;

  const [data, setData] = useState(null);
  const [profiles, setProfiles] = useState(null);
  const [bookReviewsData, setBookReviewsData] = useState(null);

  //fetching data from api
  useEffect(() => {
    fetchProducts();
    fetchUserProfiles();
    fetchBookReviews();
  }, []);

  //setting the results in setData state
  const fetchProducts = async () => {
    const data = await fetchDataFromApi(`/api/books/${id.slug}`);
    // console.log("data fetched", data);
    setData(data);
  };

  //fetch user profiles
  const fetchUserProfiles = async () => {
    const data = await fetchDataFromApi(`/api/user-profiles`);
    setProfiles(data);
  };
  //fetch book reviews
  const fetchBookReviews = async () => {
    const data = await fetchDataFromApi(`/api/book-reviews/${id.slug}`);
    setBookReviewsData(data);

  };

  // Fetch data on page load and whenever the slug ID changes / refresh
  useEffect(() => {
    if (id) {
      fetchProducts();
      fetchUserProfiles();
      fetchBookReviews();
    }
  }, [id]);

  return (
    <div className="w-full md:pt-20 md:pb-8 ">
      <Wrapper>
        {/* book Image and Titles section start */}
        <section className="w-full  md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
          <div className=" flex flex-col md:flex-row gap-10">
            <div>
              <div className="transform md:w-[390px] h-[427px] flex items-center justify-center  overflow-hidden bg-[#F6F6F6] ">
                <div>
                  <img
                    className=" w-[214px] h-[324px]"
                    alt="product book image"
                    src={data?.thumbnail_url}
                  ></img>

                  <div className="w-8 h-8 rounded-full justify-center items-center flex  bg-white absolute top-2 right-2 ">
                    <IoMdHeartEmpty className="relative  text-[15px] md:text-[18px] cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            {/* title, details and button start*/}
            <div className="gap-4 md:gap-16 flex flex-col justify-center  md:pt-4 md:pl-8">
              <section className="flex flex-col justify-center  ">
                <div className="text-center md:text-start md:w-full h-[30px] md:h-[49px] text-black text-[32px] font-semibold">
                  {data?.title}
                </div>
                <div className="text-center md:text-start md:w-full h-[63px] text-black text-[16px] font-normal -mb-4">
                  By {data?.author}
                  <br />
                </div>
                <div className="flex md:gap-8 gap-4 md:justify-start justify-center">
                  <div className="text-black text-[24px] font-normal">
                    {data?.rating}
                  </div>
                  <div className="text-black text-[13px] font-normal underline">
                    (17 reviews)
                  </div>
                </div>
              </section>
              <div className="text-center md:text-start">
                <button className="shadow-sm md:w-[263px] w-[250px] h-[50px] md:h-[66px] bg-[#228D5A] rounded-xl transform hover:scale-105 duration-300 ease-in-out">
                  <div className="md:w-[245.54px] text-center text-[#FFF1F1] md:text-[20px] font-semibold">
                    {data?.no_of_books_available} Books Available
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
          <div className="md:w-[245px] h-[31px] text-black text-[24px] font-semibold">
            Synopsis
          </div>
          <div className="w-full  text-black text-[16px] font-normal">
            {data?.synopsis}
          </div>
        </section>
        <div className="w-1/2 md:w-[851px] h-[0px] border border-[#E3E3E3] mx-auto"></div>
        {/* Synopsis section end */}

        {/* Book Swap Near Me section Component Start*/}
        <section className="my-8">
          <div className="w-80 h-[31px] text-black text-[24px] font-semibold">
            Book Swaps Near Me
          </div>
        </section>
        <section>
          {/* book nearme Component start*/}
          {profiles && <PeopleNearMe data={profiles}></PeopleNearMe>}

          {/* book nearme Component end */}
        </section>
        {/* Book Swap Near Me section End*/}

        <section className="mt-8 mb-4">
          <div className="md:w-[851px] h-[0px] border border-[#E3E3E3] mx-auto "></div>
          <div className="w-[245px] h-[31px] text-black text-[24px] font-semibold py-12 ">
            Book Reviews
          </div>
          <div className="flex justify-center items-center pt-2">
            {/* book review components */}
            {bookReviewsData && (
              <BookReviews data={bookReviewsData}></BookReviews>
            )}
          </div>
        </section>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
