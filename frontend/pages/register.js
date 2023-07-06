import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

const register = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div>
      <main className="flex :h-[100vh] font-urbanist md:-mt-16">
        <div className="w-full  p-8 md:p-14 flex items-center justify-center">
          <div className="p-8 w-[600px] justify-center text-center">
            <h1 className="text-[34px] md:text-[40px] font-semibold text-[#EBBA0C]">
              Register for BookSwap
            </h1>
            <p className="mt-6 ml-1">
              Already have an account ?{" "}
              <Link
                href="/login"
                className="underline hover:text-blue-400 cursor-pointer"
              >
                Login
              </Link>
            </p>

            <div
              className="bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group"
              //   onClick={signInWithGoogle}
            >
              <FcGoogle size={22} />
              <span className="font-medium text-black group-hover:text-white">
                Login with Google
              </span>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mt-10 pl-1 flex flex-col text-left">
                <label>Name</label>
                <input
                  type="text"
                  className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                  //   onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mt-10 pl-1 flex flex-col text-left">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                  //   onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mt-10 pl-1 flex flex-col text-left">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                  //   onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                className="bg-[#EBBA0C]  text-white w-full md:w-[50%] py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"
                // onClick={singupHandler}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default register;
