import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <Link
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      href="/product/1"
    >
      <img className="w-full" src="/assets/atomic-book.jpg"></img>
      <div className="text-base text-center p-4 text-black/[0.9]">
        Atomic Habbits
      </div>
    </Link>
  );
};

export default ProductCard;
