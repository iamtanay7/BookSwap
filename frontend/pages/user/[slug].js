import BookReviews from "@/components/BookReviews";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const User = () => {
  return (
    <div className="w-full pt-4  md:pt-20 md:pb-8 ">
      <Wrapper>
        <section className="flex flex-col md:flex-row gap-4 md:gap-28 md:mx-12">
          <div className="justify-center items-center flex">
            <img
              className="rounded-full w-[220px] h-[220px] mt-4 md:mt-0 md:w-[345px] md:h-[345px]"
              alt="profile image"
              src="https://www.salesforce.com/content/dam/blogs/uk/authors/samantha-williams.jpg"
            ></img>
          </div>

        

          <div className="gap-4 md:gap-16  flex flex-col justify-center  md:pt-4 md:pl-8">
            <section className="flex flex-col justify-center pt-4 md:pt-4  ">
              <div class="text-center md:text-start md:w-[186px] h-[30px] md:h-[49px] text-black text-[32px] font-semibold">
                Ryan
              </div>
              <div class="md:w-[236px] pt-1 md:pt-0 text-center md:text-start h-[63px] text-black text-[16px] font-normal -mb-4">
                1.3 Miles away
                <br />
              </div>

              <div className="flex md:gap-8 gap-4 md:justify-start justify-center">
                <div class="text-black text-[24px] font-normal">4.5 </div>
                <div class="text-black text-[13px] font-normal underline">
                  (17 reviews)
                </div>
              </div>
            </section>
            <div className="text-center md:text-start">
              <Link href={`/schedule/ryan`}>
                <button className="shadow-sm md:w-[263px] w-[250px] h-[50px] md:h-[66px] bg-[#228D5A] rounded-xl transform hover:scale-105 duration-300 ease-in-out">
                  <div class="md:w-[245.54px] text-center text-[#FFF1F1] md:text-[24px] font-semibold">
                    Set Up Swap
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="pt-4 md:pt-8">
          <div className="md:w-[245px] h-[31px] text-black text-[24px] font-semibold my-4">
            Book Condition
          </div>
          <div className="w-full md:h-[153px] text-black text-[16px] font-normal">
            The book is in excellent condition, a testament to the care it has
            received. Its cover is pristine, with no visible signs of wear or
            creases. The pages are crisp and clean, free from any marks, stains,
            or dog-eared corners. The spine remains unbroken, indicating that
            the book has been gently handled and well-preserved. As I flip
            through the pages, I notice the absence of any underlining,
            highlighting, or annotations, making it a pristine reading
            experience. It is evident that this book has been cherished by its
            previous owner, as it retains its original vibrancy and freshness.
            With its impeccable condition, this book presents itself as a true
            gem, ready to be enjoyed and treasured by a new reader.
          </div>
        </section>
        <section className="pt-4">
          <div className="flex flex-row gap-4 overflow-auto">
            <img
              className="h-[230px]  object-contain"
              src="/assets/book1.png"
              alt="book image"
            ></img>
            <img
              className="h-[230px]  object-contain"
              src="/assets/book3.png"
              alt="book image"
            ></img>
            <img
              className="h-[230px]  object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeh0s_HpAJoy1jb4riMec8O7j1QKJsqwNJ2EPPiJgW3JdGscwAOxZoxMulSsbJJAAoyCU&usqp=CAU"
              alt="book image"
            ></img>
          </div>
        </section>

        {/* book swapper reviews start */}
        <section className="my-8">
          <div class="md:w-[851px] h-[0px] border border-[#E3E3E3] mx-auto "></div>
          <div className="w-full h-[31px] text-black text-[24px] font-semibold py-12 ">
            Book Swapper Reviews
          </div>
          <div className="flex justify-center items-center pt-2">
            <BookReviews></BookReviews>
          </div>
        </section>
        {/* book swapper reviews end */}
      </Wrapper>
    </div>
  );
};

export default User;
