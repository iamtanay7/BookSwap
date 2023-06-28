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
    <div className="flex">
      <Link href="/wishlist">
        <section className="w-8 hidden  md:flex md:w-12 h-8 md:h-12 rounded-full  justify-center items-center hover:bg-black/[0.05] cursor-pointer relative transition-transform active:scale-90">
          <IoMdHeartEmpty color="black" className="text-[19px]  md:text-[24px]" />
        </section>
      </Link>
      <Link href="/cart">
        <section className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
          <BsCart color="black" className="text-[15px] md:text-[20px] transition-transform active:scale-90" />
        </section>
      </Link>
      <Link href="/chat">
        <section className="w-8 hidden  md:flex md:w-12 h-8 md:h-12 rounded-full  justify-center items-center hover:bg-black/[0.05] cursor-pointer relative transition-transform active:scale-90">
          <BsChatDots color="black" className="text-[19px] md:text-[24px]" />
        </section>
      </Link>
      <Link href="/profile">
        <section className="w-8 hidden  md:flex md:w-12 h-8 md:h-12 rounded-full  justify-center items-center hover:bg-black/[0.05] cursor-pointer relative transition-transform active:scale-90">
          <RxAvatar color="black" className="text-[19px] md:text-[24px]" />
        </section>
      </Link>
    </div>
  );
};

export default NavIcons;
