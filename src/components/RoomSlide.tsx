import React from "react";
import RoomSlideItem from "./RoomSlideItem";
import { roomOptionSlideItems, roomSlideItems } from "../constants";
import RoomOptionSlideItem from "./RoomOptionSlideItem";

export default function RoomSlide() {
  return (
    <>
      <h2 className="text-center md:text-left py-4 text-xl font-light">
        SHOP BY ROOMS
      </h2>
      <div className="w-full pb-3 flex flex-nowrap 2xl:justify-center overflow-hidden overflow-x-scroll">
        {roomSlideItems?.map((data, index) => (
          <RoomSlideItem data={data} />
        ))}
      </div>
      <div className="flex items-center justify-center py-6">
        <div className="bg-[#EDE9DC] w-full md:max-w-4xl 2xl:max-w-6xl p-3 flex flex-nowrap overflow-hidden overflow-x-scroll rounded-3xl items-center justify-start md:justify-center">
          {roomOptionSlideItems?.map((data) => (
            <RoomOptionSlideItem data={data} />
          ))}
          <button className="hidden md:block text-white px-6 py-1 rounded-full bg-black">
            View more
          </button>
        </div>
      </div>
    </>
  );
}
