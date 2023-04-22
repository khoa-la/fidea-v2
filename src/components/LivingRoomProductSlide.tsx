import React, { useEffect, useState } from "react";
import { livingRoomProductSlideItems } from "../constants";
import LivingRoomProductItem from "./LivingRoomProductItem";
import LivingRoomProductSlideItem from "./LivingRoomProductSlideItem";

export default function LivingRoomProductSlide() {
  return (
    <>
      <h2 className="text-left py-4 text-3xl">Recently Viewed</h2>
      <div className="w-full flex flex-nowrap overflow-hidden overflow-x-scroll">
        {livingRoomProductSlideItems?.map((data, index) => (
          <LivingRoomProductSlideItem data={data} key={index} />
        ))}
      </div>
    </>
  );
}
