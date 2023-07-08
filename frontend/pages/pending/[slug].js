import Link from "next/link";
import React from "react";

const Pending = () => {
  return (
    <div className="flex justify-center flex-col py-16">
      <section className="flex justify-center">
        <div className="w-[304px] h-[59px] text-center text-black text-[24px] font-bold">
          Swap Pending
        </div>
      </section>
      <section className="flex flex-row justify-center gap-16">
        <div>
          <img
            className="w-[486px] h-[365px]"
            src="/assets/girlreading.gif"
          ></img>
        </div>
        <div className="flex flex-col justify-start items-start my-auto  ">
          <div class="w-[382px] h-[136px] text-black text-[15px] font-medium">
            The book swapper was sent your request. If the exchange approve, you
            can message them through chat for further correspondence.
          </div>

          <section className="-mt-4">
            <div className="text-start text-black text-[15px] font-bold">
              Book: Make Time
            </div>
            <div className="text-start text-black text-[15px] font-bold">
              Book Exchanger: Ryan
            </div>
            <div className="text-start text-black text-[15px] font-bold">
              Date: 3/ 21 /23
            </div>
            <div className="text-start text-black text-[15px] font-bold">
              Location: Cafe
            </div>
            <div className="text-start text-black text-[15px] font-bold">
              Notes: N/A
            </div>
          </section>
        </div>
      </section>
      <section className="flex justify-center">
        <Link href="/">
          <div className="w-[226px] h-[66px] flex justify-center items-center bg-[#228D5A] rounded-xl shadow">
            <div className="w-[211px] text-center text-[#FFF1F1] text-[24px] font-semibold">
              Return to Home
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Pending;
