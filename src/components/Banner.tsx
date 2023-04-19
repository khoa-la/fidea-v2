import React from "react";
import Carousel from "./Carousel";
import { productBannerSlides } from "../constants";

export default function Banner() {
  return (
    <>
      <div className="flex flex-col md:hidden items-center justify-center">
        <img
          src="/assets/items/banner-1.png"
          className="object-cover w-full mb-3"
        />
        <img
          src="/assets/items/banner-2.png"
          className="object-cover w-full mb-3"
        />
      </div>
      <div className="flex items-center justify-center mb-6">
        <Carousel
          autoplay
          interval={3000}
          items={productBannerSlides}
          className="w-full h-[200px] md:h-[350px] lg:h-[423px] xl:h-[550px] 2xl:h-[850px]"
        />
      </div>
    </>
  );
}
