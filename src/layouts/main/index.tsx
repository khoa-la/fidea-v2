import React from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import { carouselItems } from "../../constants";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="px-6 md:px-16 shadow-2xl border-b-2 sticky top-0 inset-x-0 bg-white z-[9999]">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <Outlet />
    </>
  );
}
