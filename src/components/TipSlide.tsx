import React from "react";
import { tipItems } from "../constants";
import TipSlideItem from "./TipSlideItem";

export default function TipSlide() {
  return (
    <>
      <h2 className="text-center md:text-left py-4 text-xl font-light">
        Interior Tips
      </h2>
      <div className="w-full pb-6 flex flex-nowrap 2xl:justify-center overflow-hidden overflow-x-scroll">
        {tipItems?.map((data, index) => (
          <TipSlideItem data={data} />
        ))}
      </div>
    </>
  );
}
