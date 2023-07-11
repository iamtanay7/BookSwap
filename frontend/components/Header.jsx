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
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const [showSearch, setShowSearch] = useState(false);
  const [categories, setCategories] = useState(null);

  const [logOut, setLogOut] = useState(false);

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
          {/* <div>
            <button
              onClick={() => {
                console.log("logout");
                signOut();
              }}
            >
              LogOut
            </button>
          </div> */}
          <Search></Search>

          <NavIcons
            authUser={authUser}
            showProfileMenu={showProfileMenu}
            setShowProfileMenu={setShowProfileMenu}
            signOut={signOut}
            setLogOut={setLogOut}
            
          ></NavIcons>
          {/* 
          {authUser ? (
            <></>
          ) : (
            <>
              <Link href="/login">
                <li className="hidden md:flex px-1 h-10 font-medium text-black justify-center items-center  font-urbanist mr-2 transition-transform active:scale-90">
                  Login
                </li>
              </Link>
              <Link href="/register">
                <li className=" hidden md:flex h-10 px-5  text-[14px] leading-tight text-white justify-center items-center  bg-black rounded-lg transition-transform hover:bg-black/[0.8] active:scale-90">
                  Sign Up
                </li>
              </Link>
            </>
          )}

          {authUser && (
            <section
              onClick={() => {
                setShowProfileMenu(true);
              }}
              className={`w-8 flex ${
                authUser?.photo ? "" : "hidden"
              } md:flex md:w-12 h-8 md:h-12 rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer relative transition-transform  active:scale-90`}
            >
              {authUser?.photo ? (
                <div className="w-[70%]">
                  <img
                    referrerpolicy="no-referrer"
                    className="rounded-full"
                    alt="photo"
                    src={authUser?.photo}
                  />
                </div>
              ) : (
                <>
                  <h1>{authUser?.username}</h1>
                </>
              )}
            </section>
          )}
         
           <ProfileMenu
              showProfileMenu={showProfileMenu}
              setShowProfileMenu={setShowProfileMenu}
              signOut={signOut}
              setLogOut={setLogOut}
            ></ProfileMenu> */}
        </Wrapper>
      </header>
    </>
  );
};

export default Header;
