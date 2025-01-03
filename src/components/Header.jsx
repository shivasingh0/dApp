import React from "react";
import Button from "./Button";

export const Header = () => {
  return (
    <div>
      <div className="w-full bg-white fixed bg-opacity-70 backdrop-filter backdrop-blur-lg z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          <img
            src="/assets/logo.png"
            alt="Frog Logo"
            width={170}
            height={170}
            className="object-contain"
          />

          <nav className="hidden md:flex items-center gap-6 lg:gap-14 font-normal text-black">
            <a
              href="#"
              className="hover:text-[#3D3D3D] text-sm lg:text-lg transition-all ease-in-out rounded-lg 
    hover:border-[4px] hover:border-[#000] border-[4px] border-transparent px-2 py-1"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="hover:text-gray-700 text-sm lg:text-lg transition-all ease-in-out rounded-lg
    hover:border-[4px] hover:border-[#000] border-[4px] border-transparent px-2 py-1"
            >
              TOKENOMICS
            </a>
            <a
              href="#"
              className="hover:text-gray-700 text-sm lg:text-lg transition-all ease-in-out rounded-lg
    hover:border-[4px] hover:border-[#000] border-[4px] border-transparent px-2 py-1"
            >
              BUY
            </a>
            <a
              href="#"
              className="hover:text-gray-700 text-sm lg:text-lg transition-all ease-in-out rounded-lg
    hover:border-[4px] hover:border-[#000] border-[4px] border-transparent px-2 py-1"
            >
              FAQS
            </a>
          </nav>

          <div className="hidden md:block">
            <Button />
          </div>

          <div className="md:hidden">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};
