import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 bg-white left-0 w-full h-full flex justify-center items-center">
      <Image
        width={150}
        height={150}
        alt="Loading..."
        src="https://raw.githubusercontent.com/nikhil-pn/BookSwap/7e9df29d0175add0fe0e81b5352ec3882dbc2850/frontend/public/Spinneryellow.svg"
      />
    </div>
  );
};

export default Loader;
