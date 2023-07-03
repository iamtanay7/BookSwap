import React from "react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" text-white">
      <section className="justify-center items-center flex p-4">
        <div className="text-[10px] md:text-[14px] font-medium text-gray-600 hover:text-black cursor-pointer text-center md:text-left">
          © 2023 BookSwap-Colab20, Inc. All Rights Reserved
        </div>
      </section>
    </footer>
  );
};

export default Footer;
