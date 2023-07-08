import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Schedule = () => {
  const [selected, SetSelected] = useState(false);
  return (
    <div className="flex justify-center flex-col items-center py-12">
      <div className="gap-4 flex flex-col">
        <div className="w-[245px] h-[31px] text-black text-[20px] font-normal">
          Set Up Swap with Ryan
        </div>
        {/* date */}
        <div className="text-black text-[16px] font-bold">Date</div>
        <div className="w-[380px] h-[47px] bg-zinc-100 rounded-md ">
          <section className="flex flex-row gap-4 justify-start items-center w-full h-full">
            <input
              type="date"
              className="dateStyle w-full h-full bg-zinc-100 text-zinc-400 text-[16px] font-bold rounded  text-start px-8 outline-none"
              placeholder="dd / mm / yyyy"
            ></input>
          </section>
        </div>
        {/* Time */}
        <div className="text-black text-[16px] font-bold">Time</div>
        <section className="flex flex-row gap-4 h-[47px]">
          <input
            type="time"
            className="w-full h-full bg-zinc-100 text-zinc-400 font-bold text-start rounded text-[16px] px-8 outline-none"
          ></input>
        </section>
        {/* location */}
        <div className="text-black text-[16px] font-bold">Location</div>
        <div className="w-[380px] h-[47px] bg-[#F3F3F3] rounded-md flex justify-start pl-2 items-center">
          <AiOutlineSearch
            color="#B0B0B0"
            className="pl-2 h-8 w-8"
          ></AiOutlineSearch>
          <input
            placeholder=""
            className="w-full h-full pl-4 rounded outline-none bg-zinc-100 text-zinc-400 font-bold text-start  text-[16px]"
          ></input>
        </div>
        {/* recommended locations */}
        <div className="text-black text-[16px] font-medium">
          Recommended Locations
        </div>
        <section className="grid grid-col grid-cols-2 gap-4">
          <button
            onClick={() => {
              if (selected) {
                SetSelected(false);
              } else {
                SetSelected(true);
              }
            }}
            className={`w-[163px] h-[34px] cursor-pointer rounded-xl justify-center items-center flex ${
              selected ? "bg-[#EBBA0C] " : "bg-zinc-100"
            }`}
          >
            <div
              className={`${
                selected ? "text-white" : "text-black"
              } text-[16px] font-medium`}
            >
              Midtown Library
            </div>
          </button>
        </section>
        {/* notes */}
        <div className="text-black text-[16px] font-bold">Notes</div>
        <div className="w-[380px] h-[132px] bg-[#F3F3F3] rounded-sm flex justify-start items-start">
          <textarea className="w-full h-full bg-[#F3F3F3] rounded-sm outline-none flex justify-start items-start text-zinc-400 font-bold text-start p-2 text-[16px]"></textarea>
        </div>
        {/* CONFIRM BUTTON */}
        <section className="flex justify-end mt-4">
          <Link href="/pending/d">
            <button className="w-[226px] h-[66px] bg-[#228D5A] rounded-xl shadow flex justify-center items-center hover:scale-105 duration-300 ease-in-out cursor-pointer">
              <div className="w-[211px] text-center text-[#FFF1F1] text-[24px] font-semibold">
                Confirm
              </div>
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Schedule;
