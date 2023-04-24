import React from "react";
import Carousel from "../components/Carousel";
import { livingRoomItems, livingRoomSlideItems } from "../constants";
import LivingRoomSlideItem from "../components/LivingRoomSlideItem";
import LivingRoomProduct from "../components/LivingRoomProduct";
import LivingRoomProductSlide from "../components/LivingRoomProductSlide";
import TipSlide from "../components/TipSlide";
import Footer from "../components/Footer";

export default function LivingRoom() {
  return (
    <>
      <div className="px-6 md:px-8 lg:px-16 py-6 md:flex">
        <div className="w-full">
          <Carousel
            items={livingRoomItems}
            autoplay
            interval={3000}
            className="h-[222px] sm:h-[300px] md:h-[400px] lg:h-[600px] 2xl:h-[850px] md:mr-3"
          />
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-16 w-full pt-6">
        <div className="text-center pb-6">
          <h2 className="text-center py-4 text-2xl font-bold">LIVING ROOMS</h2>
          <span className="text-center pb-6">
            Discover beautiful living rooms to inspire your personal space. Make
            the living room more wonderful and cozy according to your family's
            taste.
          </span>
        </div>
        <div className="w-full flex flex-nowrap pb-3 2xl:justify-center overflow-hidden overflow-x-scroll">
          {livingRoomSlideItems?.map((data, index) => (
            <LivingRoomSlideItem data={data} />
          ))}
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-16 md:flex flex-col w-full md:bg-[#F4F1E9]">
        <LivingRoomProduct />
      </div>

      <div className="px-6 md:px-8 lg:px-16 md:flex flex-col w-full md:bg-[#F4F1E9]">
        <LivingRoomProductSlide />
      </div>

      <div className="px-6 md:px-8 lg:px-16 w-full pt-6">
        <TipSlide />
      </div>

      <div className="px-6 md:px-8 lg:px-16 w-full pt-6 bg-[#235D55] flex flex-col items-center justify-between">
        <Footer />
      </div>
    </>
  );
}
