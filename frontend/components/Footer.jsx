import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#EBBA0C] h-[150px] w-full text-white">
      <div className="flex items-center h-full justify-start pl-16  w-full">
        <img
          src="/assets/bookswapw.png"
          className="hidden md:block"
          alt="bookswap logo"
        />
        <div className="text-[10px] ml-auto pr-20 md:text-[14px] font-medium text-[#f6f6f6] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 BookSwap-Colab20, Inc. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
