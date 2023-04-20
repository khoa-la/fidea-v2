import React from "react";

export default function Banner4() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(/assets/items/banner-16.png)` }}
        className={`w-full md:hidden h-[633px] opacity-90 bg-center bg-cover group relative flex flex-col items-center justify-center`}
      >
        <h2 className="text-white font-bold text-4xl">Beautiful Ideas</h2>
        <h2 className="text-white font-bold text-4xl">Await You</h2>
        <span className="w-80 text-center text-white text-lg py-3">
          Check out interesting interior decoration ideas from other customers,
          you can buy them directly at Fidea in a convenient and simple way.
        </span>
        <button className="text-white text-4xl font-bold rounded-full bg-inherit border border-white px-12 py-3 mt-4">
          Explore
        </button>
      </div>
      <div
        className={`hidden md:flex w-full bg-[#8FB1BA] h-[633px] items-center justify-center`}
      >
        <div className={`w-full flex flex-col items-center justify-center`}>
          <h2 className="text-white font-bold text-4xl">Beautiful Ideas</h2>
          <h2 className="text-white font-bold text-4xl">Await You</h2>
          <span className="w-80 text-center text-white text-lg py-3">
            Check out interesting interior decoration ideas from other
            customers, you can buy them directly at Fidea in a convenient and
            simple way.
          </span>
          <button className="text-white text-4xl font-bold rounded-full bg-inherit border border-white px-12 py-3 mt-4">
            Explore
          </button>
        </div>
        <div
          className={`w-full h-5/6 bg-center bg-cover pr-11 flex flex-col items-start 2xl:items-center justify-center`}
        >
          <img src="/assets/items/banner-17.png" />
        </div>
      </div>
    </>
  );
}
