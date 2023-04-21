import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { brandItems } from "../constants";

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: "linear",
};

export default function BrandSlick() {
  return (
    <Slider {...settings}>
      {brandItems?.map((data) => (
        <div className="w-14 h-14 md:w-10 md:h-10 flex item justify-center">
          <img
            src={`${data.imgUrl}`}
            key={`${data.id}`}
            className="w-full object-contain h-full"
          />
        </div>
      ))}
    </Slider>
  );
}
