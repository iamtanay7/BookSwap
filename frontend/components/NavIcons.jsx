import React, { useState } from "react";
import Link from "next/link";
import ProfileMenu from "./ProfileMenu";

const NavIcons = ({
  authUser,
  showProfileMenu,
  setShowProfileMenu,
  signOut,
  setLogOut,
}) => {
  return (
    <div className="-ml-12 -mr-8 justify-between gap-4 hidden md:flex items-center">
      <Link href="">
        <div className="text-zinc-600  text-[16px] font-semibold">Browse</div>
      </Link>
      <Link href="/wishlist">
        <div className="text-zinc-600  text-[16px] font-semibold">Wishlist</div>
      </Link>

      {/* <Link href="/chat">
        <div className="text-zinc-600 text-[16px] font-semibold">Chat</div>
      </Link>
      <Link href="/chat">
        <div className="text-zinc-600 text-[16px] font-semibold">Profile</div>
      </Link> */}

      {authUser ? (
        <></>
      ) : (
        <>
          <Link href="/login">
            <li className="hidden md:flex text-zinc-600  text-[16px] font-semibold justify-center items-center  transition-transform active:scale-90">
              Login
            </li>
          </Link>
          <Link href="/register">
            <li className=" hidden md:flex h-10 px-5  text-[14px] leading-tight text-white justify-center items-center  bg-[#228D5A] rounded-lg transition-transform hover:bg-[#228D5A]/[0.8] active:scale-90">
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
              <h1 className="text-zinc-600  text-[16px] font-semibold">
                {authUser?.username}
              </h1>
            </>
          )}
        </section>
      )}
      {/* Profile menus like signOut */}
      <ProfileMenu
        showProfileMenu={showProfileMenu}
        setShowProfileMenu={setShowProfileMenu}
        signOut={signOut}
        setLogOut={setLogOut}
      ></ProfileMenu>
    </div>
  );
};

export default NavIcons;
