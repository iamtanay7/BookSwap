import BookReviews from "@/components/BookReviews";
import Loader from "@/components/Loader";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";

const User = () => {
  const router = useRouter();
  const id = router.query;

  const [user, setUser] = useState(null);
  //fetching data from api
  useEffect(() => {
    fetchUser();
  }, []);

  //setting the results in setData state
  const fetchUser = async () => {
    const data = await fetchDataFromApi(`/api/user-profiles/${id.slug}`);
    console.log("user data", data);
    setUser(data);
  };

  // Fetch data on page load and whenever the slug ID changes / refresh
  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  const dataToSend = user?.name;

  return (
    <div className="w-full pt-4  md:pt-20 md:pb-8 ">
      <Wrapper>
        <section className="flex flex-col md:flex-row gap-4 md:gap-28 md:mx-12">
          <div className="justify-center items-center flex">
            <img
              className="rounded-full w-[220px] h-[220px] mt-4 md:mt-0 md:w-[345px] md:h-[345px]"
              alt="profile image"
              src={user?.profile_photo_url}
            ></img>
          </div>

          <div className="gap-4 md:gap-16  flex flex-col justify-center  md:pt-4 md:pl-8">
            <section className="flex flex-col justify-center pt-4 md:pt-4  ">
              <div class="text-center md:text-start md:w-full h-[30px] md:h-[49px] text-black text-[32px] font-semibold">
                {user?.name}
              </div>
              <div class="md:w-[236px] pt-1 md:pt-0 text-center md:text-start h-[63px] text-black text-[16px] font-normal -mb-4">
                {user?.miles_away} Miles away
                <br />
              </div>

              <div className="flex md:gap-8 gap-4 md:justify-start justify-center">
                <div class="text-black text-[24px] font-normal">4.5</div>
                <div class="text-black text-[13px] font-normal underline">
                  (17 reviews)
                </div>
              </div>
            </section>
            <div className="text-center md:text-start">
              <Link href={`/schedule/${encodeURIComponent(dataToSend)}`}>
                <button className="shadow-sm md:w-[263px] w-[250px] h-[50px] md:h-[66px] bg-[#228D5A] rounded-xl transform hover:scale-105 duration-300 ease-in-out">
                  <div class="md:w-[245.54px] text-center text-[#FFF1F1] md:text-[20px] font-semibold">
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
            {user?.user_review}
          </div>
        </section>
        {/* book swapper reviews end */}
      </Wrapper>
    </div>
  );
};

export default User;
