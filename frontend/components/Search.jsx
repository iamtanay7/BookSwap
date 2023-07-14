import React from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {

  return (
    <>
      <form className="flex  items-center w-full pt-8 md:pt-0   md:w-1/2 ">
        <div className="relative w-full  flex-row  flex bg-zinc-100 rounded-lg shadow-sm">
          <input
            placeholder="Search Books "
            className="w-full text-zinc-400 pl-8 text-[14px] font-semibold h-[50px] rounded-bl-lg bg-zinc-100 focus:bg-[#FFFFFF] rounded-tl-lg   outline-none"
          ></input>
          <div className=" flex pl-4 pr-4 items-center cursor-pointer ">
            <AiOutlineSearch
              color="gray"
              className="text-[19px] text-center rounded-full md:text-[26px] "
            />
          </div>
          {/* drop down live search section */}
          <div className="hidden w-full -z-10 absolute top-8   bg-[#FFFFFF] rounded-[7px]">
            <section className="pt-8 px-8 pb-4  justify-center items-start  flex flex-col">
              <div className="text-zinc-700 hover:text-[#228D5A] text-base font-semibold cursor-pointer">
                to kill a mockingbird
              </div>
              <div className="#FFFFFF text-base font-semibold">
                how to win friends and influence others
              </div>
              <div className="#FFFFFF text-base font-semibold">
                the hunger games
              </div>
              <div className="#FFFFFF text-base font-semibold">
                cost of living
              </div>
            </section>
          </div>
        </div>
      </form>
    </>
  );
}

export default Search;
