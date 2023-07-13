import React from "react";
import SearchCard from "@/components/SearchCard";

const Search = () => {
  return (
    <div className="flex justify-center">
      <section className="flex flex-col justify-center py-4">
        <div class="md:w-[245px] text-center md:text-start  h-[31px] text-black text-[20px] font-normal my-4">
          Top Results
        </div>
        <SearchCard></SearchCard>
        <SearchCard></SearchCard>
        <SearchCard></SearchCard>
      </section>
    </div>
  );
};

export default Search;
