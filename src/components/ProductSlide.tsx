import React from "react";
import { optionSlideItems, productFilterSlides } from "../constants";
import ProductSlideItem from "./ProductSlideItem";
import { Card, CardMedia, Typography } from "@mui/material";
import OptionSlideItem from "./OptionSlideItem";

export default function ProductSlide() {
  return (
    <>
      <h2 className="text-center md:text-left py-4 text-xl font-light">
        SHOP BY CATEGORY
      </h2>
      <div className="w-full flex flex-nowrap pb-3 lg:justify-center overflow-hidden overflow-x-scroll">
        {productFilterSlides?.map((data, index) => (
          <ProductSlideItem data={data} />
        ))}
      </div>
      <div className="flex items-center justify-center py-6">
        <div className="bg-[#EDE9DC] w-full md:max-w-2xl 2xl:max-w-6xl p-3 flex flex-nowrap overflow-hidden overflow-x-scroll rounded-3xl items-center justify-start md:justify-center">
          {optionSlideItems?.map((data) => (
            <OptionSlideItem data={data} />
          ))}
          <button className="hidden md:block text-white px-6 py-1 rounded-full bg-black">
            View more
          </button>
        </div>
      </div>
    </>
  );
}
