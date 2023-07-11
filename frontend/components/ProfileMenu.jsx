import React from "react";
import Link from "next/link";

const ProfileMenu = ({
  showProfileMenu,
  setShowProfileMenu,
  signOut,
  setLogOut,
}) => {
  return (
    <>
      {showProfileMenu && (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
          <li
            className="cursor-pointer flex items-center gap-2 relative"
            onClick={() => {setShowProfileMenu(false)}}
            onMouseLeave={() => setShowProfileMenu(false)}
          >
            <ul className="bg-white absolute top-10 right-0 min-w-[200px] px-1 py-1 text-black shadow-lg">
          

              <li
                className="h-12 text-black flex justify-center items-center px-3 hover:bg-black/[0.03] transition-transform  active:scale-90 rounded-md"
                onClick={()=>{
                  signOut(),
                  setLogOut(true)
                }}
              >
                Sign Out
              </li>
            </ul>
          </li>
        </ul>
      )}  
    </>
  );
};

export default ProfileMenu;
