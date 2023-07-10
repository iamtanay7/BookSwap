import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 bg-white left-0 w-full h-full flex justify-center items-center">
      <Image
        width={150}
        height={150}
        alt="Loading..."
        src="/assets/spinneryellow.svg"
      />
    </div>
  );
};

export default Loader;
