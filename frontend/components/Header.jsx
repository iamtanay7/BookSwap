import Wrapper from "./Wrapper";
import Link from "next/link";

import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import Search from "./Search";
import NavIcons from "./NavIcons";

const Header = () => {
  const [show, setShow] = useState("translate-y-0");

  return (
    <>
      <header
        className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform divide-gray-300 ${show}`}
      >
        <Wrapper className="h-[60px] flex justify-between items-center">
          <Link
            href="/"
            // onClick={() => setMobileMenu(false)}
            className="transition-transform active:scale-95"
          >
            <img
              src="/assets/bookswap.png"
              alt="main logo"
              className="w-[100px] md:w-[140px]"
            />
          </Link>
        <Search></Search>
          <NavIcons></NavIcons>
        </Wrapper>
      </header>
    </>
  );
};

export default Header;
