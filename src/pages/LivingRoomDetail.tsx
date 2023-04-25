import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { livingRoomProductSlideItems } from "../constants";
import LivingRoomProductSlide from "../components/LivingRoomProductSlide";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function LivingRoomDetail() {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-6 md:px-8 lg:px-16 w-full pt-6">
        <div className="w-full flex items-center justify-between">
          <div onClick={() => navigate("/living-rooms")}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9997 13.3334L13.333 20M13.333 20L19.9997 26.6667M13.333 20H26.6663M36.6663 20C36.6663 29.2048 29.2044 36.6667 19.9997 36.6667C10.7949 36.6667 3.33301 29.2048 3.33301 20C3.33301 10.7953 10.7949 3.33337 19.9997 3.33337C29.2044 3.33337 36.6663 10.7953 36.6663 20Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-sm md:text-4xl font-semibold">
            Modern Living Room
          </h1>
          <div className="flex items-center justify-center">
            <div className="mr-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.3337 3.78259V10.6668C23.3337 11.6002 23.3337 12.067 23.5153 12.4235C23.6751 12.7371 23.9301 12.992 24.2437 13.1518C24.6002 13.3335 25.0669 13.3335 26.0003 13.3335H32.8846M26.667 21.6667H13.3337M26.667 28.3334H13.3337M16.667 15H13.3337M23.3337 3.33337H14.667C11.8667 3.33337 10.4666 3.33337 9.39704 3.87834C8.45623 4.35771 7.69133 5.12261 7.21196 6.06342C6.66699 7.13298 6.66699 8.53311 6.66699 11.3334V28.6667C6.66699 31.467 6.66699 32.8671 7.21196 33.9367C7.69133 34.8775 8.45623 35.6424 9.39704 36.1217C10.4666 36.6667 11.8667 36.6667 14.667 36.6667H25.3337C28.1339 36.6667 29.5341 36.6667 30.6036 36.1217C31.5444 35.6424 32.3093 34.8775 32.7887 33.9367C33.3337 32.8671 33.3337 31.467 33.3337 28.6667V13.3334L23.3337 3.33337Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="mr-3">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.6523 17.0123C31.0591 16.6636 31.2626 16.4892 31.3371 16.2817C31.4025 16.0996 31.4025 15.9004 31.3371 15.7183C31.2626 15.5108 31.0591 15.3364 30.6523 14.9877L16.5344 2.88662C15.834 2.28629 15.4838 1.98613 15.1873 1.97877C14.9297 1.97238 14.6835 2.08558 14.5207 2.28538C14.3333 2.51527 14.3333 2.9765 14.3333 3.89896V11.0577C10.7755 11.6801 7.51932 13.4829 5.09952 16.1898C2.46137 19.1409 1.00206 22.9599 1 26.9183V27.9383C2.7489 25.8314 4.93251 24.1275 7.40126 22.9432C9.57783 21.899 11.9307 21.2805 14.3333 21.1175V28.101C14.3333 29.0235 14.3333 29.4847 14.5207 29.7146C14.6835 29.9144 14.9297 30.0276 15.1873 30.0212C15.4838 30.0139 15.834 29.7137 16.5344 29.1134L30.6523 17.0123Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="mr-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.8515 5C32.7219 5 36.6663 10.5875 36.6663 15.8C36.6663 26.3563 20.296 35 19.9997 35C19.7034 35 3.33301 26.3563 3.33301 15.8C3.33301 10.5875 7.27745 5 13.1478 5C16.5182 5 18.7219 6.70625 19.9997 8.20625C21.2775 6.70625 23.4812 5 26.8515 5Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-8 lg:px-16 w-full pt-6">
          <Carousel>
            {livingRoomProductSlideItems?.map((data) => (
              <div>
                <img src={`${data.imgUrl}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-16 w-full pt-6 flex flex-col items-center justify-center">
        <h2 className="text-center py-4 text-3xl">List of Products</h2>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <div className="relative">
              <img src="/assets/items/sofa-1.png" />
              <div className="absolute w-[53px] h-[75px] top-0 left-0 text-center items-center flex flex-col justify-center">
                <div className="text-center items-center">
                  <img src="/assets/items/brand-1.png" />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start md:justify-end">
              <h2 className="text-sm">Salento Linen Napkins</h2>
              <p className="text-red-500 text-lg font-bold">$351.64</p>
              <div className="w-full flex flex-col items-start justify-start">
                <p>Color</p>
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#FBA31B] mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-black mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#E1DEC4] mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#774F39] mr-3"></div>
                </div>
              </div>
              <div className="w- full flex flex-col items-start justify-start">
                <div className="flex items-start justify-start">
                  <span className="font-bold mr-2">Size: </span>
                  <span className="font-light">Set of 8 </span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="rounded-full bg-white border mr-1 px-2 py-1 md:px-5 text-xs">
                    Set of 4
                  </button>
                  <button className="rounded-full bg-[#235D55] mr-1 px-2 py-1 md:px-5 text-xs text-white">
                    Set of 8
                  </button>
                  <button className="rounded-full bg-white border mr-1 px-2 py-1 md:px-5 text-xs">
                    Set of 12
                  </button>
                </div>
              </div>
            </div>

            <div className=" w-full flex flex-col items-start justify-start">
              <div className=" hidden md:flex items-start justify-start">
                <a className="text-xs">View more</a>
                <div className="text-xs">
                  <svg
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.2713 14.0549C25.6011 13.7722 25.766 13.6309 25.8264 13.4627C25.8795 13.3151 25.8795 13.1536 25.8264 13.006C25.766 12.8378 25.6011 12.6964 25.2713 12.4137L13.8274 2.60469C13.2597 2.11807 12.9758 1.87476 12.7355 1.8688C12.5267 1.86362 12.3271 1.95538 12.1951 2.11733C12.0433 2.30368 12.0433 2.67755 12.0433 3.42529V9.22814C9.15934 9.73267 6.51988 11.194 4.55839 13.3882C2.41993 15.7803 1.23702 18.876 1.23535 22.0846V22.9114C2.653 21.2036 4.42302 19.8224 6.42418 18.8624C8.18849 18.0161 10.0957 17.5147 12.0433 17.3826V23.0433C12.0433 23.7911 12.0433 24.165 12.1951 24.3513C12.3271 24.5133 12.5267 24.605 12.7355 24.5998C12.9758 24.5939 13.2597 24.3506 13.8274 23.8639L25.2713 14.0549Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-start justify-start">
                <div className="flex items-center justify-start">
                  <RemoveCircleOutlineIcon />
                  <input
                    value={1}
                    className="text-center w-10 border border-black"
                  />
                  <AddCircleOutlineIcon />
                  <button className="bg-[#235D55] px-6 py-1 rounded-full text-white">
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <div className="relative">
              <img src="/assets/items/sofa-1.png" />
              <div className="absolute w-[53px] h-[75px] top-0 left-0 text-center items-center flex flex-col justify-center">
                <div className="text-center items-center">
                  <img src="/assets/items/brand-1.png" />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start md:justify-end">
              <h2 className="text-sm">Salento Linen Napkins</h2>
              <p className="text-red-500 text-lg font-bold">$351.64</p>
              <div className="w-full flex flex-col items-start justify-start">
                <p>Color</p>
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#FBA31B] mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-black mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#E1DEC4] mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#774F39] mr-3"></div>
                </div>
              </div>
              <div className="w- full flex flex-col items-start justify-start">
                <div className="flex items-start justify-start">
                  <span className="font-bold mr-2">Size: </span>
                  <span className="font-light">Set of 8 </span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="rounded-full bg-white border mr-1 px-2 py-1 md:px-5 text-xs">
                    Set of 4
                  </button>
                  <button className="rounded-full bg-[#235D55] mr-1 px-2 py-1 md:px-5 text-xs text-white">
                    Set of 8
                  </button>
                  <button className="rounded-full bg-white border mr-1 px-2 py-1 md:px-5 text-xs">
                    Set of 12
                  </button>
                </div>
              </div>
            </div>

            <div className=" w-full flex flex-col items-start justify-start">
              <div className=" hidden md:flex items-start justify-start">
                <a className="text-xs">View more</a>
                <div className="text-xs">
                  <svg
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.2713 14.0549C25.6011 13.7722 25.766 13.6309 25.8264 13.4627C25.8795 13.3151 25.8795 13.1536 25.8264 13.006C25.766 12.8378 25.6011 12.6964 25.2713 12.4137L13.8274 2.60469C13.2597 2.11807 12.9758 1.87476 12.7355 1.8688C12.5267 1.86362 12.3271 1.95538 12.1951 2.11733C12.0433 2.30368 12.0433 2.67755 12.0433 3.42529V9.22814C9.15934 9.73267 6.51988 11.194 4.55839 13.3882C2.41993 15.7803 1.23702 18.876 1.23535 22.0846V22.9114C2.653 21.2036 4.42302 19.8224 6.42418 18.8624C8.18849 18.0161 10.0957 17.5147 12.0433 17.3826V23.0433C12.0433 23.7911 12.0433 24.165 12.1951 24.3513C12.3271 24.5133 12.5267 24.605 12.7355 24.5998C12.9758 24.5939 13.2597 24.3506 13.8274 23.8639L25.2713 14.0549Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-start justify-start">
                <div className="flex items-center justify-start">
                  <RemoveCircleOutlineIcon />
                  <input
                    value={1}
                    className="text-center w-10 border border-black"
                  />
                  <AddCircleOutlineIcon />
                  <button className="bg-[#235D55] px-6 py-1 rounded-full text-white">
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <div className="relative">
              <img src="/assets/items/sofa-1.png" />
              <div className="absolute w-[53px] h-[75px] top-0 left-0 text-center items-center flex flex-col justify-center">
                <div className="text-center items-center">
                  <img src="/assets/items/brand-1.png" />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start md:justify-end">
              <h2 className="text-sm">Salento Linen Napkins</h2>
              <p className="text-red-500 text-lg font-bold">$351.64</p>
              <div className="w-full flex flex-col items-start justify-start">
                <p>Color</p>
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#FBA31B] mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-black mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#E1DEC4] mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#774F39] mr-3"></div>
                </div>
              </div>
              <div className="w- full flex flex-col items-start justify-start">
                <div className="flex items-start justify-start">
                  <span className="font-bold mr-2">Size: </span>
                  <span className="font-light">Set of 8 </span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="rounded-full bg-white border mr-1 px-2 py-1 md:px-5 text-xs">
                    Set of 4
                  </button>
                  <button className="rounded-full bg-[#235D55] mr-1 px-2 py-1 md:px-5 text-xs text-white">
                    Set of 8
                  </button>
                  <button className="rounded-full bg-white border mr-1 px-2 py-1 md:px-5 text-xs">
                    Set of 12
                  </button>
                </div>
              </div>
            </div>

            <div className=" w-full flex flex-col items-start justify-start">
              <div className=" hidden md:flex items-start justify-start">
                <a className="text-xs">View more</a>
                <div className="text-xs">
                  <svg
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.2713 14.0549C25.6011 13.7722 25.766 13.6309 25.8264 13.4627C25.8795 13.3151 25.8795 13.1536 25.8264 13.006C25.766 12.8378 25.6011 12.6964 25.2713 12.4137L13.8274 2.60469C13.2597 2.11807 12.9758 1.87476 12.7355 1.8688C12.5267 1.86362 12.3271 1.95538 12.1951 2.11733C12.0433 2.30368 12.0433 2.67755 12.0433 3.42529V9.22814C9.15934 9.73267 6.51988 11.194 4.55839 13.3882C2.41993 15.7803 1.23702 18.876 1.23535 22.0846V22.9114C2.653 21.2036 4.42302 19.8224 6.42418 18.8624C8.18849 18.0161 10.0957 17.5147 12.0433 17.3826V23.0433C12.0433 23.7911 12.0433 24.165 12.1951 24.3513C12.3271 24.5133 12.5267 24.605 12.7355 24.5998C12.9758 24.5939 13.2597 24.3506 13.8274 23.8639L25.2713 14.0549Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-start justify-start">
                <div className="flex items-center justify-start">
                  <RemoveCircleOutlineIcon />
                  <input
                    value={1}
                    className="text-center w-10 border border-black"
                  />
                  <AddCircleOutlineIcon />
                  <button className="bg-[#235D55] px-6 py-1 rounded-full text-white">
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <div className="relative">
              <img src="/assets/items/sofa-1.png" />
              <div className="absolute w-[53px] h-[75px] top-0 left-0 text-center items-center flex flex-col justify-center">
                <div className="text-center items-center">
                  <img src="/assets/items/brand-1.png" />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start md:justify-end">
              <h2 className="text-sm">Salento Linen Napkins</h2>
              <p className="text-red-500 text-lg font-bold">$351.64</p>
              <div className="w-full flex flex-col items-start justify-start">
                <p>Color</p>
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#FBA31B] mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-black mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#E1DEC4] mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#774F39] mr-3"></div>
                </div>
              </div>
              <div className="w- full flex flex-col items-start justify-start">
                <div className="flex items-start justify-start">
                  <span className="font-bold mr-2">Size: </span>
                  <span className="font-light">Set of 8 </span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="rounded-full bg-white border mr-1 px-2 py-1 md:px-5 text-xs">
                    Set of 4
                  </button>
                  <button className="rounded-full bg-[#235D55] mr-1 px-2 py-1 md:px-5 text-xs text-white">
                    Set of 8
                  </button>
                  <button className="rounded-full bg-white border mr-1 px-2 py-1 md:px-5 text-xs">
                    Set of 12
                  </button>
                </div>
              </div>
            </div>

            <div className=" w-full flex flex-col items-start justify-start">
              <div className=" hidden md:flex items-start justify-start">
                <a className="text-xs">View more</a>
                <div className="text-xs">
                  <svg
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.2713 14.0549C25.6011 13.7722 25.766 13.6309 25.8264 13.4627C25.8795 13.3151 25.8795 13.1536 25.8264 13.006C25.766 12.8378 25.6011 12.6964 25.2713 12.4137L13.8274 2.60469C13.2597 2.11807 12.9758 1.87476 12.7355 1.8688C12.5267 1.86362 12.3271 1.95538 12.1951 2.11733C12.0433 2.30368 12.0433 2.67755 12.0433 3.42529V9.22814C9.15934 9.73267 6.51988 11.194 4.55839 13.3882C2.41993 15.7803 1.23702 18.876 1.23535 22.0846V22.9114C2.653 21.2036 4.42302 19.8224 6.42418 18.8624C8.18849 18.0161 10.0957 17.5147 12.0433 17.3826V23.0433C12.0433 23.7911 12.0433 24.165 12.1951 24.3513C12.3271 24.5133 12.5267 24.605 12.7355 24.5998C12.9758 24.5939 13.2597 24.3506 13.8274 23.8639L25.2713 14.0549Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-start justify-start">
                <div className="flex items-center justify-start">
                  <RemoveCircleOutlineIcon />
                  <input
                    value={1}
                    className="text-center w-10 border border-black"
                  />
                  <AddCircleOutlineIcon />
                  <button className="bg-[#235D55] px-6 py-1 rounded-full text-white">
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <div className="relative">
              <img src="/assets/items/sofa-1.png" />
              <div className="absolute w-[53px] h-[75px] top-0 left-0 text-center items-center flex flex-col justify-center">
                <div className="text-center items-center">
                  <img src="/assets/items/brand-1.png" />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start md:justify-end">
              <h2 className="text-sm">Salento Linen Napkins</h2>
              <p className="text-red-500 text-lg font-bold">$351.64</p>
              <div className="w-full flex flex-col items-start justify-start">
                <p>Color</p>
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#FBA31B] mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-black mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#E1DEC4] mr-3"></div>
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#774F39] mr-3"></div>
                </div>
              </div>
              <div className="w- full flex flex-col items-start justify-start">
                <div className="flex items-start justify-start">
                  <span className="font-bold mr-2">Size: </span>
                  <span className="font-light">Set of 8 </span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="rounded-full bg-white border mr-1 px-2 py-1 md:px-5 text-xs">
                    Set of 4
                  </button>
                  <button className="rounded-full bg-[#235D55] mr-1 px-2 py-1 md:px-5 text-xs text-white">
                    Set of 8
                  </button>
                  <button className="rounded-full bg-white border mr-1 px-2 py-1 md:px-5 text-xs">
                    Set of 12
                  </button>
                </div>
              </div>
            </div>

            <div className=" w-full flex flex-col items-start justify-start">
              <div className=" hidden md:flex items-start justify-start">
                <a className="text-xs">View more</a>
                <div className="text-xs">
                  <svg
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.2713 14.0549C25.6011 13.7722 25.766 13.6309 25.8264 13.4627C25.8795 13.3151 25.8795 13.1536 25.8264 13.006C25.766 12.8378 25.6011 12.6964 25.2713 12.4137L13.8274 2.60469C13.2597 2.11807 12.9758 1.87476 12.7355 1.8688C12.5267 1.86362 12.3271 1.95538 12.1951 2.11733C12.0433 2.30368 12.0433 2.67755 12.0433 3.42529V9.22814C9.15934 9.73267 6.51988 11.194 4.55839 13.3882C2.41993 15.7803 1.23702 18.876 1.23535 22.0846V22.9114C2.653 21.2036 4.42302 19.8224 6.42418 18.8624C8.18849 18.0161 10.0957 17.5147 12.0433 17.3826V23.0433C12.0433 23.7911 12.0433 24.165 12.1951 24.3513C12.3271 24.5133 12.5267 24.605 12.7355 24.5998C12.9758 24.5939 13.2597 24.3506 13.8274 23.8639L25.2713 14.0549Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-start justify-start">
                <div className="flex items-center justify-start">
                  <RemoveCircleOutlineIcon />
                  <input
                    value={1}
                    className="text-center w-10 border border-black"
                  />
                  <AddCircleOutlineIcon />
                  <button className="bg-[#235D55] px-6 py-1 rounded-full text-white">
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black md:bg-inherit mt-6">
        <div
          style={{ backgroundImage: `url(/assets/items/banner-22.png)` }}
          className={`w-full h-full bg-center bg-cover group relative flex flex-col items-start justify-center py-6 md:py-9 lg:py-14 px-3 md:px-10`}
        >
          <h2 className="text-white font-bold text-lg md:text-3xl xl:text-5xl">
            Want To Buy The Whole Look?
          </h2>
          <span className="text-sm text-white md:text-base md:w-3/4 md:py-5 xl:text-3xl">
            Make sure all sizes and quantities are selected correctly to ensure
            the products will fit your space.
          </span>
          <button className="text-white text-lg font-bold rounded-full bg-[#0F241D] px-6 py-3 mt-4 xl:text-3xl">
            Add all to cart
          </button>
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-16 md:flex flex-col w-full md:bg-[#F4F1E9]">
        <LivingRoomProductSlide />
      </div>

      <div className="px-6 md:px-8 lg:px-16 w-full pt-6 bg-[#235D55] flex flex-col items-center justify-between">
        <Footer />
      </div>
    </>
  );
}
