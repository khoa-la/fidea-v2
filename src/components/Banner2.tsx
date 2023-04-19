import React from "react";

export default function Banner2() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(/assets/items/banner-8.png)` }}
        className={`w-full md:hidden h-[333px] sm:h-[500px] md:h-[400px] lg:h-[600px] 2xl:h-[1250px] opacity-90 bg-center bg-cover group relative flex flex-col items-center justify-center`}
      >
        <h2 className="text-white font-bold text-4xl">FIDEA find</h2>
        <h2 className="text-white font-bold text-4xl">Ideas for you</h2>
        <button className="text-white text-2xl font-bold rounded-2xl bg-[#0F241D] px-6 py-3 mt-4">
          Try it now!
        </button>
      </div>
      <div
        className="hidden md:flex items-center justify-center"
        style={{ backgroundImage: `url(/assets/items/banner-9.png)` }}
      >
        <div className={`w-full flex flex-col items-center justify-center`}>
          <h2 className="font-bold text-4xl">FIDEA find</h2>
          <h2 className="font-bold text-4xl">Ideas for you</h2>
          <button className="text-white text-2xl font-bold rounded-2xl bg-[#0F241D] px-6 py-3 mt-4">
            Try it now!
          </button>
        </div>
        <div className={`w-full h-[333px] flex items-center justify-center `}>
          <div className="flex flex-col items-center justify-center w-52">
            <img src="/assets/items/banner-10.png" />
            <p className="text-center">
              Propose products from the color gamut in your room.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-52">
            <img src="/assets/items/banner-11.png" />
            <p className="text-center">
              Propose products from the color gamut in your room.
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-center justify-center w-52">
            <img src="/assets/items/banner-12.png" />
            <p className="text-center">
              Propose products from the color gamut in your room.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
