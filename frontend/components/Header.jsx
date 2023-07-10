import Wrapper from "./Wrapper";
import Link from "next/link";

import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import Search from "./Search";
import NavIcons from "./NavIcons";

import { useAuth } from "@/firebase/auth";

const Header = () => {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { authUser, isLoading, signOut } = useAuth();

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform divide-gray-300 ${show}`}
      >
        <Wrapper className="h-[60px] flex justify-between items-center">
          <Link
            href="/"
            // onClick={() => setMobileMenu(false)}
            className="hidden md:block transition-transform active:scale-95"
          >
            <img
              src="/assets/bookswaplogo.svg"
              alt="main logo"
              className="w-[100px] md:w-[140px]"
            />
          </Link>
          <div>
            <button
              onClick={() => {
                console.log("logout");
                signOut();
              }}
            >
              LogOut
            </button>
          </div>
          <Search></Search>
          <NavIcons></NavIcons>
        </Wrapper>
      </header>
    </>
  );
};

export default Header;
