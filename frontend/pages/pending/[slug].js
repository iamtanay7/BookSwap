import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Pending = () => {
  const router = useRouter();
  const receivedData = router.query.data ? JSON.parse(router.query.data) : null;

  console.log(receivedData, "pending received data");

  return (
    <Wrapper>
      <div className="flex justify-center flex-col pt-16  py-16 md:py-0  h-screen">
        <section className="flex justify-center pt-16 md:-mt-16 ">
          <div className="w-[304px] h-[59px] text-center text-black text-[30px] md:text-[35px] font-bold">
            Swap Pending
          </div>
        </section>
        <section className="flex flex-col md:flex-row justify-center gap-16">
          <div>
            <img
              className="md:w-[486px] md:h-[365px]"
              src="/assets/girlreading.gif"
            ></img>
          </div>
          <div className="flex flex-col justify-start items-start my-auto -mt-8  md:mt-8">
            <div className="md:w-[382px] h-[136px] text-black text-[15px] font-medium">
              The book swapper was sent your request. If the exchange approve,
              you can message them through chat for further correspondence.
            </div>

            <section className="-mt-4">
              {/* <div className="text-start text-black text-[15px] font-bold">
                Book: Make Time
              </div> */}
              <div className="text-start text-black text-[15px] font-bold">
                Book Exchanger: {receivedData?.name}
              </div>
              <div className="text-start text-black text-[15px] font-bold">
                Date: {receivedData?.date}
              </div>
              <div className="text-start text-black text-[15px] font-bold">
                Location: {receivedData?.location}
              </div>
              <div className="text-start text-black text-[15px] font-bold">
                Notes: {receivedData?.note ? receivedData.note : <p>N/A</p>}
              </div>
            </section>
          </div>
        </section>
        <section className="flex justify-center pt-4 pb-16 md:p-0">
          <Link href="/">
            <div className="md:w-[226px] h-[48px] md:h-[66px] flex justify-center items-center bg-[#228D5A] rounded-xl shadow">
              <div className="md:w-[211px] w-[200px] text-center text-[#FFF1F1] text-lg  md:text-[20px] font-semibold">
                Return to Home
              </div>
            </div>
          </Link>
        </section>
      </div>
    </Wrapper>
  );
};

export default Pending;
