import React, { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchDataFromApi } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/router";

function Search() {
  const [data, setData] = useState([]);
  const [searchTxt, setSearchText] = useState("");

  const [clicked, setClicked] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();


  console.log(clicked, "clicked");

  const handleClick = () => {
    // Toggle the state when the input is clicked

    if (clicked) {
      // setClicked(false);
      return;
    }
    setClicked(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the input
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setClicked(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [searchTxt]);

  const fetchData = async () => {
    const data = await fetchDataFromApi(
      `/api/books/search/?title=${searchTxt}`
    );
    const trimed = data.slice(0, 7);

    setData(trimed);
    console.log(data, "search data");
  };

  const searchButton = async () => {
    // const data = await fetchDataFromApi(
    //   `/api/books/search/?title=${searchTxt}`
    // );
    console.log(data, "search data");
    const id = data.id
    router.push(`/search/${searchTxt}`)

  };
  const mouseLeave = ()=>{
    setClicked(false)
  }

  return (
    <>
      <form
        ref={inputRef}
        className="flex  items-center w-full pt-8 md:pt-0   md:w-1/2 "
      >
        <div className="relative w-full  flex-row  flex bg-zinc-100 rounded-lg shadow-sm">
          <input
            onClick={handleClick}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Books "
            className="w-full text-zinc-400 pl-8 text-[14px] font-semibold h-[50px] rounded-bl-lg bg-zinc-100 focus:bg-[#FFFFFF] rounded-tl-lg   outline-none"
          ></input>
          <div
            onClick={searchButton}
            className=" flex pl-4 pr-4 items-center cursor-pointer "
          >
            <AiOutlineSearch
              color="gray"
              className="text-[19px] text-center rounded-full md:text-[26px] "
            />
          </div>
          {/* drop down live search section */}
          <div
            onMouseLeave={mouseLeave}
            className={`${
              clicked ? "block" : "hidden"
            }  w-full -z-10 absolute top-8   bg-[#FFFFFF] rounded-[7px]`}
          >
            <section className="pt-8 px-8 pb-4  justify-center items-start  flex flex-col">
              {data &&
                data?.map((e) => (
                  <Link
                    href={`/product/${e.id}`}
                    key={e.id}
                    className={` text-zinc-700 hover:text-gray-900 w-full hover:bg-zinc-100 rounded-sm  text-base font-semibold cursor-pointer`}
                  >
                    {e.title}
                  </Link>
                ))}
            </section>
          </div>
        </div>
      </form>
    </>
  );
}

export default Search;
