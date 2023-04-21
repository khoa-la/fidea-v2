import {
  Chip,
  Divider,
  IconButton,
  Popover,
  SwipeableDrawer,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { bannerItems, navLinks, roomSlideItems } from "../constants";
import RoomSlideItem from "./RoomSlideItem";

export default function ListMenuProfile() {
  const [active, setActive] = useState("Home");
  const [openMenu, setOpenMenu] = useState(false);
  const [openRooms, setOpenRooms] = useState(false);
  const [openShopBy, setOpenShopBy] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenu = (e: string) => {
    setActive(e);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className=" flex justify-end items-center">
      <div className="block lg:hidden">
        <IconButton
          color="inherit"
          component="button"
          // onClick={() => setToggle(!toggle)}
        >
          <SearchIcon sx={{ width: 32, height: 32 }} />
        </IconButton>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <div className="mr-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.3338 12.0001V8.00008C21.3338 5.05456 18.946 2.66675 16.0005 2.66675C13.055 2.66675 10.6672 5.05456 10.6672 8.00008V12.0001M4.78985 13.8027L3.98985 22.336C3.76239 24.7623 3.64866 25.9754 4.05125 26.9124C4.40491 27.7356 5.02467 28.4162 5.8112 28.8451C6.70655 29.3334 7.925 29.3334 10.3619 29.3334H21.6391C24.076 29.3334 25.2945 29.3334 26.1898 28.8451C26.9764 28.4162 27.5961 27.7356 27.9498 26.9124C28.3524 25.9754 28.2386 24.7623 28.0112 22.336L27.2112 13.8027C27.0191 11.7539 26.9231 10.7295 26.4623 9.95497C26.0565 9.27286 25.457 8.7269 24.74 8.38654C23.9258 8.00008 22.8969 8.00008 20.8391 8.00008L11.1619 8.00008C9.1041 8.00008 8.07519 8.00008 7.26107 8.38654C6.54407 8.72689 5.94452 9.27286 5.53873 9.95496C5.07797 10.7295 4.98193 11.7539 4.78985 13.8027Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <NotificationsOutlinedIcon
          className="mr-2"
          sx={{
            width: 32,
            height: 32,
          }}
        />
        <PermIdentityOutlinedIcon sx={{ width: 32, height: 32 }} />
      </div>
      <IconButton color="inherit" component="button" onClick={handleClick}>
        <MenuOutlinedIcon sx={{ width: 32, height: 32 }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ zIndex: 9999 }}
      >
        <div className="flex md:hidden items-center justify-center px-2 pt-2">
          <div className="mr-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3338 12.0001V8.00008C21.3338 5.05456 18.946 2.66675 16.0005 2.66675C13.055 2.66675 10.6672 5.05456 10.6672 8.00008V12.0001M4.78985 13.8027L3.98985 22.336C3.76239 24.7623 3.64866 25.9754 4.05125 26.9124C4.40491 27.7356 5.02467 28.4162 5.8112 28.8451C6.70655 29.3334 7.925 29.3334 10.3619 29.3334H21.6391C24.076 29.3334 25.2945 29.3334 26.1898 28.8451C26.9764 28.4162 27.5961 27.7356 27.9498 26.9124C28.3524 25.9754 28.2386 24.7623 28.0112 22.336L27.2112 13.8027C27.0191 11.7539 26.9231 10.7295 26.4623 9.95497C26.0565 9.27286 25.457 8.7269 24.74 8.38654C23.9258 8.00008 22.8969 8.00008 20.8391 8.00008L11.1619 8.00008C9.1041 8.00008 8.07519 8.00008 7.26107 8.38654C6.54407 8.72689 5.94452 9.27286 5.53873 9.95496C5.07797 10.7295 4.98193 11.7539 4.78985 13.8027Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <NotificationsOutlinedIcon
            className="mr-2"
            sx={{
              width: 32,
              height: 32,
            }}
          />
          <PermIdentityOutlinedIcon sx={{ width: 32, height: 32 }} />
        </div>
        <ul className="mt-3 px-3 flex md:hidden flex-col items-start justify-start">
          <li
            className={`font-medium cursor-pointer text-[18px] pt-3 ${
              active === "Home" ? "text-[#FBA31B]" : "text-black"
            }`}
            onClick={() => handleClickMenu("Home")}
          >
            <a href={`/`}>Home</a>
          </li>
          <li
            className={`font-medium cursor-pointer text-[18px] pt-3 ${
              active === "Products" ? "text-[#FBA31B]" : "text-black"
            }`}
            onClick={() => {
              handleClickMenu("Products");
              setOpenMenu(true);
            }}
          >
            Products
          </li>
          <li
            className={`font-medium cursor-pointer text-[18px] pt-3 ${
              active === "Rooms" ? "text-[#FBA31B]" : "text-black"
            }`}
            onClick={() => {
              handleClickMenu("Rooms");
              setOpenRooms(true);
            }}
          >
            Rooms
          </li>
          <li
            className={`font-medium cursor-pointer text-[18px] pt-3 ${
              active === "Ideas" ? "text-[#FBA31B]" : "text-black"
            }`}
            onClick={() => handleClickMenu("Ideas")}
          >
            Ideas
          </li>
          <li
            className={`font-medium cursor-pointer text-[18px] pt-3 ${
              active === "Shop by" ? "text-[#FBA31B]" : "text-black"
            }`}
            onClick={() => {
              handleClickMenu("Shop by");
              setOpenShopBy(true);
            }}
          >
            Shop by
          </li>
        </ul>
        <Divider
          variant="fullWidth"
          className="md:hidden"
          color="black"
          sx={{ m: 2 }}
        />
        <div className="hidden md:flex justify-center items-center text-center mt-4">
          <Chip label="English" variant="outlined" />
        </div>
        <ul className="mb-3 px-3 flex flex-col items-start justify-start md:items-center">
          <li className="font-medium cursor-pointer text-[18px] pt-3">
            Services
          </li>
          <li className="font-medium cursor-pointer text-[18px] pt-3">
            Showrooms
          </li>
        </ul>
      </Popover>

      <SwipeableDrawer
        anchor="top"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        onOpen={() => setOpenMenu(true)}
        sx={{ zIndex: 99999 }}
      >
        <div className="flex items-end justify-end bg-[#F5F5F5]">
          <IconButton
            color="inherit"
            component="button"
            onClick={() => setOpenMenu(false)}
          >
            <CloseIcon sx={{ width: 32, height: 32 }} />
          </IconButton>
        </div>
        <div className="w-full px-6 py-3 flex flex-col items-start justify-center bg-[#F5F5F5]">
          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="font-semibold">LIVING ROOM</h2>
            <div className="flex flex-wrap justify-center items-center w-full">
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  SOFA
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  COFFEE TABLE
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  ARM CHAIR
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  RELAX SOFA
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  TV SHELF
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  TEA TABLE
                </a>
              </div>
            </div>
          </div>
          <Divider
            variant="middle"
            color="black"
            sx={{ my: 1, color: "black" }}
          />
          <div className="flex flex-col items-start justify-center">
            <h2 className="font-semibold">DINING ROOM</h2>
            <div className="flex flex-wrap justify-center items-center w-full">
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  DINING TABLE SET
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  DINING TABLE
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  DINING CHAIR
                </a>
              </div>
            </div>
          </div>
          <Divider
            variant="middle"
            color="black"
            sx={{ my: 1, color: "black" }}
          />
          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="font-semibold">BED ROOM</h2>
            <div className="flex flex-wrap justify-center items-center w-full">
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  BED ROOM SET
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  BED
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  MATTRES
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  SHELF IN FRONT OF BED
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  MULTI-FUNCTION WARDROBE
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  WARDROBE
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  MAKEUP TABLE
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  MAKEUP CHAIR
                </a>
              </div>
            </div>
          </div>
          <Divider
            variant="middle"
            color="black"
            sx={{ my: 1, color: "black" }}
          />
          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="font-semibold">KIDS ROOM</h2>
            <div className="flex flex-wrap justify-center items-center w-full">
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  KIDS ROOM SET
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  BOOK SHELF
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  STUDYING SHELF
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  STUDYING TABLE
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  STUDYING CHAIR
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  KID BED
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  KID WARDROBE
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  MULTI-FUNCTION WARDROBE
                </a>
              </div>
            </div>
          </div>
          <Divider
            variant="middle"
            color="black"
            sx={{ my: 1, color: "black" }}
          />
          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="font-semibold">HOME OFFICE</h2>
            <div className="flex flex-wrap justify-center items-center w-full">
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  HOME OFFICE
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  OFFICE TABLE
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  BOOK SHELF
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  OFFICE CHAIR
                </a>
              </div>
            </div>
          </div>
          <Divider
            variant="middle"
            color="black"
            sx={{ my: 1, color: "black" }}
          />
          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="font-semibold">ACCESSORIES</h2>
            <div className="flex flex-wrap justify-center items-center w-full">
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  DECOR SHELF
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  VASES
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  RUGS
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  LAMPS
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  HANGER
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  SHOES CABINET
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  MIRROR FRAME
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  MIRROR
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  LOVE TABLE
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  GALLERY
                </a>
              </div>
              <div className="flex items-center justify-between w-full">
                <a className="w-full py-2 font-extralight" href="">
                  THROWS & BEDSPREADS
                </a>
                <a className="w-full py-2 font-extralight" href="">
                  FUNITURE ACCESSORIES
                </a>
              </div>
            </div>
          </div>
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
              <button className="text-white text-2xl md:text-base bg-[#235D55] rounded-full px-6 py-5 my-6 mx-12 md:mx-2">
                {data.title}
              </button>
            </div>
          ))}
        </div>
      </SwipeableDrawer>
    </div>
  );
}
