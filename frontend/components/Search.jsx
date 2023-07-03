import React from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <form className="flex items-center w-1/2">
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border-2 border-gray-600 focus:border-red-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-center"
          placeholder="Search Your favorite books...!"
          required
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <AiOutlineSearch color="gray" className="text-[19px] md:text-[24px] " />
        </div>
      </div>
    </form>
  );
}

export default Search;
