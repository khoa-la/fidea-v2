import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Divider, InputAdornment, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };
  return (
    <>
      <div className="w-full flex items-center justify-between py-3">
        <img src="assets/items/logo.png" />
        <div className="flex items-center justify-center">
          <button
            className="flex items-center justify-center"
            onClick={scrollToTop}
          >
            <span className="hidden md:block text-white underline">
              Back to top
            </span>

            <ArrowCircleUpIcon className="text-white" />
          </button>
        </div>
      </div>
      <div className="md:flex items-center justify-between md:pb-10 w-full">
        <div className="w-full flex flex-col items-start justify-start py-3">
          <h3 className="text-white font-semibold">Sign Up For Emails</h3>
          <TextField
            sx={{
              [`& fieldset`]: {
                borderRadius: "9999px",
              },
              my: 2,
            }}
            placeholder="Type your email"
            className="max-w-[250px] w-full rounded-full text-white bg-white"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
          <div className="hidden md:flex items-center justify-center">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
        <Divider
          variant="fullWidth"
          className="md:hidden"
          color="white"
          sx={{ my: 2 }}
        />
        <Divider
          variant="fullWidth"
          orientation="vertical"
          flexItem
          color="white"
          sx={{ mx: 2 }}
          className="hidden md:block"
        />
        <div className="w-full flex flex-col items-start justify-start pb-3">
          <h3 className="text-white font-semibold">Customer Service</h3>
          <div className="flex flex-wrap justify-center items-center w-full">
            <div className="flex items-center justify-between w-full">
              <span className="w-full text-white py-5 font-extralight">
                Delivery
              </span>
              <span className="w-full text-white py-5 font-extralight">
                Terms & Conditions
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="w-1/2 text-white py-5 font-extralight">
                Warranty terms
              </span>
              <span className="w-1/2 text-white py-5 font-extralight">FAQ</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="w-1/2 text-white py-5 font-extralight">
                Returns & Exchanges
              </span>
              <span className="w-1/2 text-white py-5 font-extralight">
                Support
              </span>
            </div>
          </div>
        </div>
        <Divider
          variant="fullWidth"
          className="md:hidden"
          color="white"
          sx={{ my: 2 }}
        />
        <Divider
          variant="fullWidth"
          orientation="vertical"
          flexItem
          color="white"
          sx={{ mx: 2 }}
          className="hidden md:block"
        />
        <div className="w-full flex flex-col items-start justify-start pb-3">
          <h3 className="text-white font-semibold">About us</h3>
          <div className="flex md:flex-col justify-center items-center md:items-start">
            <span className="text-white py-5 pr-5 font-extralight">
              Delivery
            </span>
            <span className="text-white py-5 pr-5 font-extralight">
              Terms & Conditions
            </span>
            <span className="text-white py-5 pr-5 font-extralight">
              Warranty terms
            </span>
          </div>
        </div>
        <div className="w-full md:hidden flex items-center justify-between pb-3">
          <div className="flex items-center justify-center">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="flex items-center justify-end">
            <div className="border py-2 px-6 text-center border-white text-white bg-inherit rounded-full">
              English
            </div>
            <KeyboardArrowDownIcon className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
}
