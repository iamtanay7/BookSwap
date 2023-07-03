import Wrapper from "@/components/Wrapper";
import React from "react";

const User = () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-between gap-8 mt-4 px-4 ">
        <section className="flex flex-row justify-between">
          <div className="w-1/2 ">
            <img
              className="rounded-full h-32 w-32"
              alt="profile image"
              src="/assets/rachel.jpg"
            ></img>
          </div>
          <div className="justify-center items-center flex flex-col w-1/2">
            <h4 className="text-2xl">Rachel Green</h4>
            <p>NewYork</p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </section>
        <section>
          <h4 className="text-2xl">Book Condition</h4>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </section>
        <section>
          <h4 className="text-2xl">Image of Book</h4>
          <div className="flex flex-row gap-4 overflow-auto">
            <img
              className="h-32 w-32 object-cover"
              src="/assets/atomic-book.jpg"
              alt="book image"
            ></img>
            <img
              className="h-32 w-32 object-cover"
              src="/assets/atomic-book.jpg"
              alt="book image"
            ></img>
            <img
              className="h-32 w-32 object-cover"
              src="/assets/atomic-book.jpg"
              alt="book image"
            ></img>
          </div>
        </section>
        <section>
          <h4 className="text-2xl">Exchangers Review</h4>
          <p>
            'lorem ipsum' will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </section>
        <section className="justify-end flex">
          <button className="bg-gray-400 w-48 h-12">Set Exchange</button>

        </section>
      </div>
    </Wrapper>
  );
};

export default User;
