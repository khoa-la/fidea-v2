import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useCountdown from "../hooks/useCountdown";
import { productSliderItems } from "../constants";
import ProductSliderItem from "./ProductSliderItem";

export default function Product2() {
  const countdown = useCountdown(new Date("04/26/2023 00:00"));
  return (
    <>
      <h2 className="text-center py-4 text-xl">Offer of the month</h2>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mx-6 mb-3 lg:mx-[150px]">
        <span className="text-[#F24E1E] font-bold text-2xl my-2">
          FLASH SALE
        </span>
        <div className="flex justify-center items-center">
          <div className="font-extrabold mr-3">
            <Typography variant="h6">Ends after</Typography>
          </div>
          <div className="bg-black text-white px-2">
            <Typography variant="h4" className="font-extrabold">
              {countdown.days}
            </Typography>
          </div>

          <Typography variant="h4" className="text-black">
            :
          </Typography>

          <div className="bg-black text-white px-2">
            <Typography variant="h4" className="font-extrabold">
              {countdown.hours}
            </Typography>
          </div>

          <Typography variant="h4" className="font-extrabold">
            :
          </Typography>

          <div className="bg-black text-white px-2">
            <Typography variant="h4" className="font-extrabold">
              {countdown.minutes}
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-nowrap overflow-hidden overflow-x-scroll">
        {productSliderItems?.map((data, index) => (
          <ProductSliderItem data={data} />
        ))}
      </div>
    </>
  );
}
