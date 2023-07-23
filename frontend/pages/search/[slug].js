import React, { useEffect, useState } from "react";
import SearchCard from "@/components/SearchCard";
import { fetchDataFromApi } from "@/utils/api";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const slugData = router.query;
  const [dataSearch, setDataSearch] = useState([]);

  console.log(slugData.slug, "slug data");

  useEffect(() => {
    fetchData();
  }, [slugData.slug]);

  const fetchData = async () => {
    const data = await fetchDataFromApi(
      `/api/books/search/?title=${slugData.slug}`
    );
    setDataSearch(data);

    console.log(dataSearch, "search data");
  };

  return (
    <div className="flex justify-center ">
      <section className="flex flex-col justify-center py-4">
        <div className="md:w-[245px text-center md:text-start  h-[31px] text-black text-[20px] font-normal my-4">
          Top Results
        </div>
        <div className="py-auto px-8">
          {dataSearch &&
            dataSearch.map((book) => <SearchCard data={book}></SearchCard>)}
        </div>
      </section>
    </div>
  );
};

export default Search;
