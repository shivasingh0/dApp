import React from "react";
import Button from "./Button";

export const Feature = () => {
  return (
    <div className="">
      <div className="w-full bg-[#3D3D3D] rounded-lg px-44 flex items-center gap-8 shadow-lg">
        <div className="w-[30%]">
        <img
          src="/assets/polarBeer/feature.gif"
          alt="featureImg"
          className="w-[1000px] h-[1000px] scale-150 object-contain"
        />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-title text-[9rem] font-bold leading-none">
            WHATS <br /> FROGCOIN?
          </h1>
          <p className="text-neutral-50 text-2xl">
            FrogCoin brings our love for frogs into Web3! Like a frogs leap,
            the chart can jump at any moment.
          </p>
          <div >
          <Button text={"Contact Us"} />
          </div>
        </div>
      </div>
    </div>
  );
};
