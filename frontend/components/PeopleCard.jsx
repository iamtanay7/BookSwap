import Link from "next/link";
import React from "react";

const PeopleCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {/* IMAGE section goes here link tag to route start */}
      <Link href={`/user/ryan`}>
        <img
          alt="people info image"
          className="w-[131px] h-[127px] bg-zinc-300 rounded-full mb-1"
          src="/assets/ryan.png"
        />
      </Link>
      <div className="w-[40px] absolute bottom-16 right-12 h-[40px] bg-[#EEC32A] rounded-full justify-center items-center">
        <div className=" flex justify-center items-center ">
          <div className="text-[#FFF1F1] text-[15px] font-medium mt-2 ">
            4.5
          </div>
        </div>
      </div>
      {/* IMAGE section goes here end */}
      <div class="text-black text-[24px] font-medium">Ryan</div>
      <div class="w-[131px] h-[22px] text-center text-black text-[16px] font-normal">
        1.3 miles away
      </div>
    </div>
  );
};

export default PeopleCard;
