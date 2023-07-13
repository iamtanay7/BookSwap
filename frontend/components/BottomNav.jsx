import React from "react";
import Wrapper from "./Wrapper";

import { IoMdHeartEmpty } from "react-icons/io";
import { ImHome3 } from "react-icons/im";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";
import { BsFillChatDotsFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

import Link from "next/link";

const BottomNav = () => {
  return (
    <Wrapper>
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-zinc-50 p-4 ">
        <div className="flex flex-row text-white w-full justify-between px-8">
          <Link href="/">
            <section className="w-full">
              <ImHome3 className="w-7 h-7 text-zinc-500"></ImHome3>
            </section>
          </Link>
          <Link href="">
            <section className="w-full">
              <AiTwotoneHeart className="w-7 h-7 text-zinc-500"></AiTwotoneHeart>
            </section>
          </Link>
          <Link href="">
            <section className="w-full">
              <BsFillChatDotsFill className="w-7 h-7 text-zinc-500"></BsFillChatDotsFill>
            </section>
          </Link>
          <Link href="/login">
            <section className="w-full">
              <RxAvatar className="w-7 h-7 text-zinc-500"></RxAvatar>
            </section>
          </Link>
        </div>
      </nav>
    </Wrapper>
  );
};

export default BottomNav;
