import React from "react";
import Carousel from "../components/Carousel";
import {
  carouselItems,
  productBannerSlides,
  promotionItems,
  voucherItems,
} from "../constants";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SimpleCarousel from "../components/SimpleCarousel";
import Voucher from "../components/Voucher";
import Promotion from "../components/Promotion";
import Product from "../components/Product";
import Product2 from "../components/Product2";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import ProductSlide from "../components/ProductSlide";
import RoomSlide from "../components/RoomSlide";
import Banner3 from "../components/Banner3";

export default function Home() {
  return (
    <>
      <div className="px-6 md:px-8 lg:px-16 py-6 md:flex">
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
      <div className="px-6 md:px-8 lg:px-16 md:flex w-full">
        <Voucher datas={voucherItems} />
      </div>
      <div className="px-6 md:px-8 lg:px-16 hidden md:flex w-full">
        <Promotion datas={promotionItems} />
      </div>
      <div className="px-6 md:px-8 lg:px-16 md:flex flex-col w-full md:bg-[#F4F1E9]">
        <Product />
      </div>
      <div className="px-6 md:px-8 lg:px-16 md:flex flex-col w-full md:bg-[#ECF1F4]">
        <Product2 />
      </div>
      <div className="px-6 md:px-0 md:flex flex-col w-full pt-6">
        <Banner />
      </div>
      <div className="w-full bg-black md:bg-inherit">
        <Banner2 />
      </div>
      <div className="px-6 md:px-8 lg:px-16 w-full pt-6">
        <ProductSlide />
      </div>
      <div className="px-6 md:px-8 lg:px-16 w-full pt-6 bg-[#ECF1F4]">
        <RoomSlide />
      </div>
      <div className="px-6 md:px-8 lg:px-16 w-full pt-6">
        <Banner3 />
      </div>
    </>
  );
}
