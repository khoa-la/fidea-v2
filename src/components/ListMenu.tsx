import React, { useState } from "react";
import { bannerItems, navLinks, roomSlideItems } from "../constants";
import { Divider, IconButton, SwipeableDrawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BrandSlick from "./BrandSlick";
import RoomSlide from "./RoomSlide";
import RoomSlideItem from "./RoomSlideItem";
import { useNavigate } from "react-router-dom";

export default function ListMenu() {
  const [active, setActive] = useState("Home");
  const [openProducts, setOpenProducts] = useState(false);
  const [openRooms, setOpenRooms] = useState(false);
  const [openShopBy, setOpenShopBy] = useState(false);
  const handleClick = (e: string) => {
    setActive(e);
  };
  const navigate = useNavigate();
  return (
    <>
      <ul className="list-none hidden md:flex justify-start items-center mx-2">
        {/* {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className={`font-medium cursor-pointer text-[16px] ${
            active === nav.title ? "text-[#FBA31B]" : "text-black"
          } ${index === navLinks.length - 1 ? "mr-0" : "mr-5"}`}
          onClick={() => setActive(nav.title)}
        >
          <a href={`${nav.id}`}>{nav.title}</a>
        </li>
      ))} */}
        <li
          className={`font-medium cursor-pointer text-[20px] mr-5 ${
            active === "Home" ? "text-[#FBA31B]" : "text-white"
          }`}
          onClick={() => handleClick("Home")}
        >
          <a href={`/`}>Home</a>
        </li>
        <li
          className={`font-medium cursor-pointer text-[20px] mr-5 ${
            active === "Products" ? "text-[#FBA31B]" : "text-white"
          }`}
          onClick={() => {
            handleClick("Products");
            setOpenProducts(true);
          }}
        >
          Products
        </li>
        <li
          className={`font-medium cursor-pointer text-[20px] mr-5 ${
            active === "Rooms" ? "text-[#FBA31B]" : "text-white"
          }`}
          onClick={() => {
            handleClick("Rooms");
            setOpenRooms(true);
          }}
        >
          Rooms
        </li>
        <li
          className={`font-medium cursor-pointer text-[20px] mr-5 ${
            active === "Ideas" ? "text-[#FBA31B]" : "text-white"
          }`}
          onClick={() => handleClick("Ideas")}
        >
          Ideas
        </li>
        <li
          className={`font-medium cursor-pointer text-[20px] mr-5 ${
            active === "Shop by" ? "text-[#FBA31B]" : "text-white"
          }`}
          onClick={() => {
            handleClick("Shop by");
            setOpenShopBy(true);
          }}
        >
          Shop by
        </li>
      </ul>

      <SwipeableDrawer
        anchor="top"
        open={openProducts}
        onClose={() => setOpenProducts(false)}
        onOpen={() => setOpenProducts(true)}
        sx={{ zIndex: 99999 }}
      >
        <div className="flex items-end justify-end bg-[#F5F5F5]">
          <IconButton
            color="inherit"
            component="button"
            onClick={() => setOpenProducts(false)}
          >
            <CloseIcon sx={{ width: 32, height: 32 }} />
          </IconButton>
        </div>
        <div className="w-full px-6 py-3 flex items-start justify-center bg-[#F5F5F5]">
          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="font-semibold">LIVING ROOM</h2>
            <ol className="">
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  SOFA
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  COFFEE TABLE
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  ARM CHAIR
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  RELAX SOFA
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  TV SHELF
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  TEA TABLE
                </a>
              </li>
            </ol>
          </div>
          <Divider
            variant="middle"
            orientation="vertical"
            color="black"
            sx={{ my: 1, color: "black" }}
          />
          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="font-semibold">DINING ROOM</h2>
            <ol className="">
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  DINING TABLE SET
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  DINING TABLE
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  DINING CHAIR
                </a>
              </li>
            </ol>
          </div>
          <Divider
            orientation="vertical"
            variant="middle"
            color="black"
            sx={{ my: 1, color: "black" }}
          />
          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="font-semibold">BED ROOM</h2>
            <ol className="">
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  BED ROOM SET
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  BED
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  MATTRES
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  SHELF IN FRONT OF BED
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  MULTI-FUNCTION WARDROBE
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  WARDROBE
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  MAKEUP TABLE
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  MAKEUP CHAIR
                </a>
              </li>
            </ol>
          </div>
          <Divider
            orientation="vertical"
            variant="middle"
            color="black"
            sx={{ my: 1, color: "black" }}
          />
          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="font-semibold">KIDS ROOM</h2>
            <ol className="">
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  KIDS ROOM SET
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  BOOK SHELF
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  STUDYING SHELF
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  STUDYING TABLE
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  STUDYING CHAIR
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  KID BED
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  KID WARDROBE
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  MULTI-FUNCTION WARDROBE
                </a>
              </li>
            </ol>
          </div>
          <Divider
            orientation="vertical"
            variant="middle"
            color="black"
            sx={{ my: 1, color: "black" }}
          />
          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="font-semibold">HOME OFFICE</h2>
            <ol className="">
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  HOME OFFICE
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  OFFICE TABLE
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  OFFICE CHAIR
                </a>
              </li>
            </ol>
          </div>
          <Divider
            orientation="vertical"
            variant="middle"
            color="black"
            sx={{ my: 1, color: "black" }}
          />
          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="font-semibold">ACCESSORIES</h2>
            <ol className="">
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  DECOR SHELF
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  VASES
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  RUGS
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  LAMPS
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  HANGER
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  SHOES CABINET
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  MIRROR FRAME
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  MIRROR
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  LOVE TABLE
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  GALLERY
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  THROWS & BEDSPREADS
                </a>
              </li>
              <li>
                <a className="w-full py-2 font-extralight" href="">
                  FUNITURE ACCESSORIES
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className="px-6 md:pl-8 lg:pl-16 w-full pt-6">
          <BrandSlick />
        </div>
      </SwipeableDrawer>

      <SwipeableDrawer
        anchor="top"
        open={openRooms}
        onClose={() => setOpenRooms(false)}
        onOpen={() => setOpenRooms(true)}
        sx={{ zIndex: 99999 }}
      >
        <div className="flex items-end justify-end bg-[#F5F5F5]">
          <IconButton
            color="inherit"
            component="button"
            onClick={() => setOpenRooms(false)}
          >
            <CloseIcon sx={{ width: 32, height: 32 }} />
          </IconButton>
        </div>
        <div className="w-full pb-3 flex flex-nowrap lg:justify-center overflow-hidden overflow-x-scroll">
          {roomSlideItems?.map((data, index) => (
            <RoomSlideItem data={data} />
          ))}
        </div>
      </SwipeableDrawer>

      <SwipeableDrawer
        anchor="top"
        open={openShopBy}
        onClose={() => setOpenShopBy(false)}
        onOpen={() => setOpenShopBy(true)}
        sx={{ zIndex: 99999 }}
      >
        <div className="flex items-end justify-end bg-[#F5F5F5]">
          <IconButton
            color="inherit"
            component="button"
            onClick={() => setOpenShopBy(false)}
          >
            <CloseIcon sx={{ width: 32, height: 32 }} />
          </IconButton>
        </div>
        <div className="w-full pb-3 flex flex-col md:flex-row items-center justify-center">
          {bannerItems?.map((data) => (
            <div className={`flex flex-col md:mr-3`} key={data.id}>
              <img src={`${data.imgUrl}`} />
              <button
                onClick={() => navigate(`${data.path}`)}
                className="text-white text-2xl md:text-base bg-[#235D55] rounded-full px-6 py-5 my-6 mx-12 md:mx-2"
              >
                {data.title}
              </button>
            </div>
          ))}
        </div>
      </SwipeableDrawer>
    </>
  );
}
