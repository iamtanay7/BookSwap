import Link from "next/link";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

const ProductCard = ({data}) => {
  console.log(data, "book");
  return (
    <div>
      <div
        className="transform  md:w-[213px] md:h-[253px] flex items-center justify-center  overflow-hidden bg-[#F6F6F6] duration-200 hover:scale-105 "
       
      >
        <div>
          <Link href={`/product/${data?.id}`}>
            <img
              className="w-[130px]"
              alt="product book image"
              src={data?.thumbnail_url}
            ></img>
          </Link>
          <div className="w-6 h-6 rounded-full justify-center items-center flex  bg-white absolute top-2 right-2 ">
            <IoMdHeartEmpty className="relative text-[15px] md:text-[18px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-2 pb-2">
        <div className="flex flex-col  ">
          <div className="text-black text-[16px] font-bold -mb-1">
           {data?.title}
          </div>
          <div className="text-black text-[13px] font-normal">{data?.author}</div>
          <div className="flex items-center gap-1">
            <div className="text-[13px] font-normal text-black">{data?.rating}</div>
            <AiOutlineStar className="md:text-[12px] text-[4px]"></AiOutlineStar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
