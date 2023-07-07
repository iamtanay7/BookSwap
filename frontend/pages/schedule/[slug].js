import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Schedule = () => {
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
            <img
              className="object-contain pl-4 "
              src="/assets/calender.svg"
              alt="calender icon"
            ></img>
            <div className="text-zinc-400 text-[16px] font-bold">
              mm / dd / yyyy
            </div>
          </section>
        </div>
        {/* Time */}
        <div className="text-black text-[16px] font-bold">Time</div>
        <section className="flex flex-row gap-4">
          <div className="w-[99px] h-[47px] relative">
            <div className="w-[99px] h-[47px] left-0 top-0 absolute">
              <div className="w-[99px] h-[47px] left-0 top-0 absolute bg-[#F3F3F3] rounded-md" />
              <div className="left-[46.72px] top-[14px] absolute text-[#AEAEAE] text-[16px] font-bold">
                :
              </div>
            </div>
          </div>
          <div className="w-16 h-[47px] relative">
            <div className="w-16 h-[47px] left-0 top-0 absolute">
              <div className="w-16 h-[47px] left-0 top-0 absolute bg-[#F3F3F3] rounded-md" />
              <div className="left-[18px] top-[14px] absolute text-black text-[16px] font-bold">
                AM
              </div>
            </div>
          </div>
          <div className="w-16 h-[47px] relative">
            <div className="w-16 h-[47px] left-0 top-0 absolute">
              <div className="w-16 h-[47px] left-0 top-0 absolute bg-[#F3F3F3] rounded-md" />
              <div className="left-[18px] top-[14px] absolute text-black text-[16px] font-bold">
                PM
              </div>
            </div>
          </div>
        </section>
        {/* location */}
        <div className="text-black text-[16px] font-bold">Location</div>
        <div className="w-[380px] h-[47px] bg-[#F3F3F3] rounded-md flex justify-start pl-2 items-center">
          <AiOutlineSearch
            color="#B0B0B0"
            className="h-6 w-6"
          ></AiOutlineSearch>
        </div>
        {/* recommended locations */}
        <div className="text-black text-[16px] font-medium">
          Recommended Locations
        </div>
        <section className="grid grid-col grid-cols-2 gap-4">
          <div className="w-[163px] h-[34px] bg-[#F3F3F3] rounded-xl justify-center items-center flex">
            <div className="text-black text-[16px] font-medium">
              Midtown Library
            </div>
          </div>
          <div className="w-[163px] h-[34px] bg-[#F3F3F3] rounded-xl justify-center items-center flex">
            <div className="text-black text-[16px] font-medium">
              Midtown Library
            </div>
          </div>
          <div className="w-[163px] h-[34px] bg-[#F3F3F3] rounded-xl justify-center items-center flex">
            <div className="text-black text-[16px] font-medium">
              Midtown Library
            </div>
          </div>
        </section>
        {/* notes */}
        <div className="text-black text-[16px] font-bold">Notes</div>
        <div className="w-[380px] h-[132px] bg-[#F3F3F3] rounded-sm"></div>
        {/* CONFIRM BUTTON */}
        <section className="flex justify-end mt-4">
          <div className="w-[226px] h-[66px] bg-[#228D5A] rounded-xl shadow flex justify-center items-center">
            <div className="w-[211px] text-center text-[#FFF1F1] text-[24px] font-semibold">
              Confirm
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Schedule;
