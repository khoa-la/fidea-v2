import React, { useEffect, useState } from "react";
import {
  livingRoomProductItems,
  livingRoomSlideItems,
  styleBannerSlides,
} from "../constants";
import Carousel from "../components/Carousel";
import LivingRoomSlideItem from "../components/LivingRoomSlideItem";
import ShopByStyleItem from "../components/ShopByStyleItem";
import { Box, Grid, Pagination, Stack } from "@mui/material";
import LivingRoomProductItem from "../components/LivingRoomProductItem";
import TipSlide from "../components/TipSlide";
import Footer from "../components/Footer";

export default function ShopByStyle() {
  const [page, setPage] = useState(livingRoomProductItems[0].metadata.page);
  const [datas, setDatas] = useState(livingRoomProductItems[page - 1].data);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    setDatas(livingRoomProductItems[page - 1].data);
  }, [page, datas]);
  return (
    <>
      <div className="w-full py-6 md:flex">
        <div className="w-full">
          <Carousel
            items={styleBannerSlides}
            autoplay
            interval={3000}
            className="h-[222px] sm:h-[300px] md:h-[400px] lg:h-[600px] 2xl:h-[950px]"
          />
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-16 md:flex flex-col w-full">
        <h2 className="text-center py-4 text-3xl">Shop By Style</h2>
        <div className="flex items-center justify-end my-6">
          <svg
            width="32"
            height="29"
            viewBox="0 0 32 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3"
          >
            <g filter="url(#filter0_d_1346_11089)">
              <path
                d="M2.66699 3.13333C2.66699 2.3866 2.66699 2.01323 2.81232 1.72801C2.94015 1.47713 3.14412 1.27316 3.395 1.14532C3.68022 1 4.05359 1 4.80033 1H27.2003C27.9471 1 28.3204 1 28.6056 1.14532C28.8565 1.27316 29.0605 1.47713 29.1883 1.72801C29.3337 2.01323 29.3337 2.3866 29.3337 3.13333V4.02586C29.3337 4.38425 29.3337 4.56345 29.2899 4.73008C29.2511 4.87775 29.1872 5.01765 29.101 5.14368C29.0038 5.28591 28.8683 5.40327 28.5975 5.638L20.0698 13.0287C19.799 13.2634 19.6636 13.3808 19.5663 13.523C19.4801 13.649 19.4163 13.7889 19.3775 13.9366C19.3337 14.1032 19.3337 14.2824 19.3337 14.6408V21.6112C19.3337 21.8719 19.3337 22.0023 19.2916 22.115C19.2544 22.2146 19.194 22.3039 19.1153 22.3754C19.0263 22.4563 18.9052 22.5047 18.6631 22.6015L14.1298 24.4149C13.6398 24.6109 13.3947 24.7089 13.198 24.668C13.026 24.6323 12.8751 24.5301 12.778 24.3837C12.667 24.2162 12.667 23.9523 12.667 23.4245V14.6408C12.667 14.2824 12.667 14.1032 12.6232 13.9366C12.5844 13.7889 12.5205 13.649 12.4343 13.523C12.3371 13.3808 12.2017 13.2634 11.9308 13.0287L3.40314 5.638C3.1323 5.40327 2.99689 5.28591 2.89965 5.14368C2.81348 5.01765 2.7496 4.87775 2.71079 4.73008C2.66699 4.56345 2.66699 4.38425 2.66699 4.02586V3.13333Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1346_11089"
                x="-2.33301"
                y="0"
                width="36.667"
                height="33.6771"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1346_11089"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1346_11089"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width="26"
            height="22"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 11L9 11M25 3.00002L9 3.00002M25 19L9 19M3.66667 11C3.66667 11.7364 3.06971 12.3334 2.33333 12.3334C1.59695 12.3334 1 11.7364 1 11C1 10.2636 1.59695 9.66669 2.33333 9.66669C3.06971 9.66669 3.66667 10.2636 3.66667 11ZM3.66667 3.00002C3.66667 3.7364 3.06971 4.33335 2.33333 4.33335C1.59695 4.33335 1 3.7364 1 3.00002C1 2.26364 1.59695 1.66669 2.33333 1.66669C3.06971 1.66669 3.66667 2.26364 3.66667 3.00002ZM3.66667 19C3.66667 19.7364 3.06971 20.3334 2.33333 20.3334C1.59695 20.3334 1 19.7364 1 19C1 18.2636 1.59695 17.6667 2.33333 17.6667C3.06971 17.6667 3.66667 18.2636 3.66667 19Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="w-full flex flex-nowrap pb-3 2xl:justify-center overflow-hidden overflow-x-scroll">
          {livingRoomSlideItems?.map((data, index) => (
            <ShopByStyleItem data={data} />
          ))}
        </div>

        <div className="px-6 md:px-8 lg:px-16 flex items-center justify-center w-full py-4">
          <button className="px-5 py-2 rounded-3xl text-xl">Living room</button>
          <button className="px-5 py-2 rounded-3xl text-xl bg-[#235D55] text-white">
            Dining & Kitchen
          </button>
          <button className="px-5 py-2 rounded-3xl text-xl">Bedroom</button>
          <button className="px-5 py-2 rounded-3xl text-xl">
            Childrenroom
          </button>
          <button className="px-5 py-2 rounded-3xl text-xl">Home office</button>
          <button className="px-5 py-2 rounded-3xl text-xl">Hallway</button>
          <button className="px-5 py-2 rounded-3xl text-xl">Outdoor</button>
          <button className="px-5 py-2 rounded-3xl text-xl">Bathroom</button>
        </div>

        <div className="px-6 md:px-8 lg:px-16 flex flex-col items-center justify-center w-full py-4">
          <Box
            component={"div"}
            className="hidden md:flex my-1 justify-between items-center h-full"
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 4 }}
            >
              {datas?.map((data, index) => (
                <LivingRoomProductItem data={data} key={index} />
              ))}
            </Grid>
          </Box>
          <Stack spacing={2} className="flex items-center pb-2">
            <Pagination
              count={livingRoomProductItems.length}
              page={page}
              onChange={handleChange}
              className="flex"
            />
          </Stack>
        </div>

        <div className="px-6 md:px-8 lg:px-16 w-full pt-6">
          <TipSlide />
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-16 w-full pt-6 bg-[#235D55] flex flex-col items-center justify-between">
        <Footer />
      </div>
    </>
  );
}
