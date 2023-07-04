import React from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <form className="flex items-center w-full  md:w-1/2 ">
      <div className="relative w-full  flex-row flex bg-zinc-100 rounded-lg">
        <input
          placeholder="Search Books "
          className="w-full text-zinc-400 pl-8 text-[14px] font-semibold h-[50px] bg-zinc-100 rounded-lg outline-none"
        ></input>
        <div className=" flex pr-4 items-center cursor-pointer ">
          <AiOutlineSearch
            color="gray"
            className="text-[19px] text-center rounded-full md:text-[26px] "
          />
        </div>
      </div>
    </form>
  );
}

export default Search;
