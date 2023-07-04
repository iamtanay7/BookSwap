import React from "react";

import Link from "next/link";

import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

const NavIcons = () => {
  return (
    <div className="-ml-14 justify-between gap-4 hidden md:flex">
      <Link href="">
        {/* <section className="w-8 hidden  md:flex md:w-12  h-8 md:h-12 rounded   justify-center items-center hover:bg-black/[0.05] cursor-pointer relative transition-transform active:scale-90"> */}
        <div className="text-zinc-600  text-[16px] font-semibold">Browse</div>
        {/* </section> */}
      </Link>
      <Link href="/wishlist">
        {/* <section className="w-8 hidden  md:flex md:w-12 h-8 md:h-12 rounded-full  justify-center items-center hover:bg-black/[0.05] cursor-pointer relative transition-transform active:scale-90"> */}
        <div className="text-zinc-600  text-[16px] font-semibold">Wishlist</div>
        {/* </section> */}
      </Link>

      <Link href="/chat">
        <div className="text-zinc-600 text-[16px] font-semibold">Chat</div>
      </Link>
      <Link href="/profile">
        <div className="text-zinc-600 text-[16px] font-semibold">Profile</div>
      </Link>
    </div>
  );
};

export default NavIcons;
