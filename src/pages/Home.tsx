import React from "react";
import Carousel from "../components/Carousel";
import { carouselItems, voucherItems } from "../constants";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SimpleCarousel from "../components/SimpleCarousel";
import Voucher from "../components/Voucher";

export default function Home() {
  return (
    <>
      <div className="px-6 md:px-16 py-6 md:flex">
        <div className="w-full">
          <Carousel
            items={carouselItems}
            autoplay
            interval={3000}
            className="h-[522px] sm:h-[500px] md:h-[400px] lg:h-[600px] 2xl:h-[1250px] md:mr-3"
          />
        </div>
        <div className="flex items-center justify-between w-full pt-6 md:py-0">
          <SimpleCarousel
            imgUrl="/assets/items/carousel-5.png"
            titlle="Can't find your idea to your room?"
            description="Don't worry, let FIDEA help you."
            className="mr-3"
          />
          <SimpleCarousel
            imgUrl="/assets/items/carousel-6.png"
            titlle="Can't find your idea to your room?"
            description="Don't worry, let FIDEA help you."
          />
        </div>
      </div>
      <div className="px-6 md:px-16 md:flex w-full">
        <Voucher datas={voucherItems} />
      </div>
    </>
  );
}
