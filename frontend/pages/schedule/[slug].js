import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Schedule = () => {
  const router = useRouter();
  const receivedData = router.query;

  // console.log(receivedData, "received data");

  const [selected, SetSelected] = useState(false);
  const [time, SetTime] = useState(null);
  const [date, SetDate] = useState(null);
  const [location, SetLocation] = useState(null);
  const [note, setNote] = useState(null);

  // const dataToSend = `${time},${date},${location}, ${note}, ${receivedData?.slug}`

  // const router = useRouter();

  const handleClick = () => {
    const dataToSend = {
      name: receivedData?.slug,
      date,
      location,
      note,
    };

    if (date && location) {
      successButton();
      router.push({
        pathname: `/pending/${receivedData.slug}`,
        query: { data: JSON.stringify(dataToSend) }, // Convert object to JSON string and send as a query parameter
      });
      return;
    }
    deleteButton();
  };

  const deleteButton = () => {
    toast.warning("Please! Fill Info", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const successButton = () => {
    toast.success("Success! Happy Reading", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="flex justify-center flex-col items-center  py-12">
      <ToastContainer></ToastContainer>

      <div className="gap-4 flex flex-col ">
        <div className="md:w-full h-[31px] mx-auto md:mx-0 text-black text-[20px] font-normal">
          <div className="text-center">
            Set Up Swap with {receivedData?.slug}
          </div>
        </div>
        {/* date */}
        <div className="text-black text-[16px] font-bold">Date</div>
        <div className="md:w-[380px] w-[95%] mx-auto md:mx-0  h-[47px] bg-zinc-100 rounded-md ">
          <section className="flex flex-row gap-4 justify-start items-center w-full h-full">
            <input
              required
              onChange={(e) => SetDate(e.target.value)}
              type="date"
              className="dateStyle cursor-pointer w-full h-full bg-zinc-100 text-zinc-400 text-[16px] font-bold rounded  text-start px-8 outline-none"
              placeholder="dd / mm / yyyy"
            ></input>
          </section>
        </div>
        {/* Time */}
        <div className="text-black text-[16px] font-bold">Time</div>
        <section className="flex flex-row gap-4 h-[47px] md:w-[380px] w-[95%] mx-auto md:mx-0">
          <input
            onChange={(e) => SetTime(e.target.value)}
            type="time"
            className="w-full h-full cursor-pointer bg-zinc-100 text-zinc-400 font-bold text-start rounded text-[16px] px-8 outline-none"
          ></input>
        </section>
        {/* location */}
        <div className="text-black text-[16px] font-bold">Location</div>
        <div className="md:w-[380px] w-[95%] mx-auto md:mx-0 h-[47px] bg-[#F3F3F3] rounded-md flex justify-start pl-2 items-center">
          <AiOutlineSearch
            color="#B0B0B0"
            className="pl-2 h-8 w-8"
          ></AiOutlineSearch>
          <input
            required
            onChange={(e) => SetLocation(e.target.value)}
            placeholder=""
            className="w-full h-full pl-4 rounded outline-none bg-zinc-100 text-zinc-400 font-bold text-start  text-[16px]"
          ></input>
        </div>
        {/* recommended locations */}
        <div className="text-black text-[16px] font-medium">
          Recommended Locations
        </div>
        <section className="grid grid-col grid-cols-2 gap-4 pl-4 md:pl-0">
          <button
            onClick={() => {
              if (selected) {
                SetSelected(false);
              } else {
                SetSelected(true);
              }
            }}
            className={`md:w-[163px] h-[34px] cursor-pointer rounded-xl justify-center items-center flex ${
              selected ? "bg-[#EBBA0C] " : "bg-zinc-100"
            }`}
          >
            <div
              className={`${
                selected ? "text-white" : "text-black"
              } text-[16px] font-medium px-2`}
            >
              Public Library
            </div>
          </button>
        </section>
        {/* notes */}
        <div className="text-black text-[16px] font-bold">Notes</div>
        <div className="md:w-[380px] w-full mx-auto md:mx-0 h-[132px] bg-[#F3F3F3] rounded-sm flex justify-start items-start">
          <textarea
            onChange={(e) => setNote(e.target.value)}
            className="w-full h-full bg-[#F3F3F3] rounded-sm outline-none flex justify-start items-start text-zinc-400 font-bold text-start p-2 text-[16px]"
          ></textarea>
        </div>
        {/* CONFIRM BUTTON */}
        <section className="flex justify-center  md:justify-end mt-4">
          {/* <Link href={`/pending/${encodeURIComponent(dataToSend)}`}> */}
          <button
            onClick={handleClick}
            className="md:w-[226px]  w-[200px] h-[66px] bg-[#228D5A] rounded-xl shadow flex justify-center items-center hover:scale-105 duration-300 ease-in-out cursor-pointer"
          >
            <div className="md:w-[211px] text-center text-[#FFF1F1] md:text-[20px] font-semibold">
              Confirm
            </div>
          </button>
          {/* </Link> */}
        </section>
      </div>
    </div>
  );
};

export default Schedule;
