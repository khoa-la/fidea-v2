import React, { useEffect, useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

type Props = {
  style?: React.CSSProperties;
  className?: string;
  imgUrl: string;
  titlle: string;
  description: string;
};

export default function SimpleCarousel({
  style,
  className,
  imgUrl,
  titlle,
  description,
}: Props) {
  return (
    <div
      style={{ backgroundImage: `url(${imgUrl})`, ...style }}
      className={`w-full h-[333px] sm:h-[500px] md:h-[400px] lg:h-[600px] 2xl:h-[1250px] rounded-2xl bg-center bg-cover group relative ${className}`}
    >
      <div className="hidden group-hover:flex absolute h-32 sm:h-40 md:h-44 w-full bg-gray-300 opacity-80 bottom-0 rounded-3xl flex-col items-center justify-center">
        <div className="flex items-center justify-center p-2 max-w-[220px] sm:max-w-[270px]">
          <h3 className="font-semibold text-sm min-w-[120px] sm:text-lg lg:text-xl">
            {titlle}
          </h3>
          <div className="bg-white rounded-full">
            <ArrowOutwardIcon />
          </div>
        </div>
        <span className="font-extralight text-sm p-2 sm:text-lg lg:text-xl">
          {description}
        </span>
      </div>
    </div>
  );
}
