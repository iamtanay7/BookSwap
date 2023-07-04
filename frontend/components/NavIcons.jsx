import React from "react";
import Link from "next/link";
const NavIcons = () => {
  return (
    <div className="-ml-14 justify-between gap-4 hidden md:flex">
      <Link href="">
        <div className="text-zinc-600  text-[16px] font-semibold">Browse</div>
      </Link>
      <Link href="/wishlist">
        <div className="text-zinc-600  text-[16px] font-semibold">Wishlist</div>
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
