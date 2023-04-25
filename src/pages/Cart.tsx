import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Footer from "../components/Footer";

export default function Cart() {
  return (
    <>
      <div className="px-6 md:px-8 lg:px-16 w-full pt-6 text-center">
        <h1 className="text-5xl font-semibold">My Cart</h1>
      </div>
      <div className="w-full bg-[#d4dfdd] flex items-center justify-around h-16 mt-5">
        <div className="flex items-center justify-center">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <p className="ml-2 text-2xl font-medium">Products</p>
        </div>
        <div className="flex items-center justify-center pl-40">
          <p className="mr-24 text-2xl font-medium">Unit Price</p>
          <p className="mr-24 text-2xl font-medium">Quantity</p>
          <p className="text-2xl font-medium">Subtotal</p>
        </div>
      </div>
      <div className="mx-6 border-b-2 border-black my-10"></div>
      <div className="px-6 md:px-8 lg:px-16 w-full pt-6 flex items-center justify-start text-center">
        <div className="flex items-center justify-center ml-24">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <img src="/assets/items/brand-20.png" className="w-24 ml-6" />
          <img src="/assets/items/brand-19.png" className="w-24 ml-6" />
        </div>
      </div>

      <div className="mx-36 border-b-2 border-gray-400 my-4"></div>
      <div className="px-6 md:px-8 lg:px-16 w-full pt-6 flex items-center justify-around text-center">
        <div className="flex items-start justify-center">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <img src="/assets/items/cart-2.png" className="w-24 ml-6" />
          <div className="flex flex-col items-center justify-start">
            <h2 className="text-2xl pb-2">Marid Side Table</h2>
            <div className="w-full flex items-center justify-start">
              <p className="mr-2 text-lg font-medium">Color</p>
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#FBA31B] mr-3"></div>
              </div>
            </div>
            <div className="w-full flex items-center justify-start">
              <span className="font-medium mr-2">Size: </span>
              <span className="font-light">Set of 4</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pl-40">
          <p className="mr-24 text-2xl font-medium">$899.5</p>
          <div className=" w-full flex flex-col items-start justify-start mr-24">
            <div className="flex items-start justify-start">
              <div className="flex items-center justify-start">
                <RemoveCircleOutlineIcon />
                <input
                  className="w-10 border border-black text-center"
                  value={1}
                />
                <AddCircleOutlineIcon />
              </div>
            </div>
          </div>
          <p className="text-2xl font-medium">$899.5</p>
        </div>
      </div>

      <div className="mx-36 border-b-2 border-gray-400 my-4"></div>
      <div className="px-6 md:px-8 lg:px-16 w-full pt-6 flex items-center justify-around text-center">
        <div className="flex items-start justify-center">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <img src="/assets/items/cart-3.png" className="w-24 ml-6" />
          <div className="flex flex-col items-center justify-start">
            <h2 className="text-2xl pb-2">Adeleide office chair</h2>
            <div className="w-full flex items-center justify-start">
              <p className="mr-2 text-lg font-medium">Color</p>
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#FBA31B] mr-3"></div>
              </div>
            </div>
            <div className="w-full flex items-center justify-start">
              <span className="font-medium mr-2">Size: </span>
              <span className="font-light">Set of 4</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pl-40">
          <p className="mr-24 text-2xl font-medium">$1358.7</p>
          <div className=" w-full flex flex-col items-start justify-start mr-24">
            <div className="flex items-start justify-start">
              <div className="flex items-center justify-start">
                <RemoveCircleOutlineIcon />
                <input
                  className="w-10 border border-black text-center"
                  value={1}
                />
                <AddCircleOutlineIcon />
              </div>
            </div>
          </div>
          <p className="text-2xl font-medium">$1358.7</p>
        </div>
      </div>

      <div className="mx-6 border-b-2 border-black mt-10"></div>
      <div className="px-6 md:px-8 lg:px-16 w-full pt-6 flex items-center justify-start text-center">
        <div className="flex items-center justify-center ml-24">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <img src="/assets/items/brand-21.png" className="w-24 ml-6" />
          <img src="/assets/items/brand-22.png" className="w-24 ml-6" />
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-16 w-full pt-6 flex items-center justify-around text-center">
        <div className="flex items-start justify-center">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <img src="/assets/items/cart-4.png" className="w-24 ml-6" />
          <div className="flex flex-col items-center justify-start">
            <h2 className="text-2xl pb-2">ANASTASIA wardobe</h2>
            <div className="w-full flex items-center justify-start">
              <p className="mr-2 text-lg font-medium">Color</p>
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#FBA31B] mr-3"></div>
              </div>
            </div>
            <div className="w-full flex items-center justify-start">
              <span className="font-medium mr-2">Size: </span>
              <span className="font-light">Set of 4</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pl-40">
          <p className="mr-24 text-2xl font-medium">$1064.9</p>
          <div className=" w-full flex flex-col items-start justify-start mr-24">
            <div className="flex items-start justify-start">
              <div className="flex items-center justify-start">
                <RemoveCircleOutlineIcon />
                <input
                  className="w-10 border border-black text-center"
                  value={1}
                />
                <AddCircleOutlineIcon />
              </div>
            </div>
          </div>
          <p className="text-2xl font-medium">$1064.9</p>
        </div>
      </div>
      <div className="mx-6 border-b-2 border-black my-10"></div>

      <div className="flex items-center justify-between border rounded-lg mx-40 py-3 px-6 border-black mb-6">
        <div className="flex flex-col items-center justify-start">
          <div className="flex items-center justify-center">
            <p className="mr-3 text-2xl font-medium">Voucher:</p>
            <input
              placeholder="Type a code here"
              className="w-80 h-10 border rounded-2xl border-black mr-6"
            />
            <button className="px-10 py-2 text-white bg-[#235D55] rounded-full">
              Apply
            </button>
          </div>
          <div className="w-full flex items-center justify-start my-5">
            <button className="px-10 py-2 mr-3 text-white bg-[#235D55] rounded-full">
              Apply
            </button>
            <button className="px-10 py-2 mr-3 text-white bg-[#235D55] rounded-full">
              Apply
            </button>
            <p className="text-lg font-thin italic">Choose a voucher</p>
          </div>
        </div>

        <div className="mx-6 border-r-2 h-24 border-black"></div>

        <div className="w-full flex flex-col items-center justify-start">
          <div className="flex items-center justify-center text-black">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black bg-black"
            >
              <path
                d="M21.3338 12.0001V8.00008C21.3338 5.05456 18.946 2.66675 16.0005 2.66675C13.055 2.66675 10.6672 5.05456 10.6672 8.00008V12.0001M4.78985 13.8027L3.98985 22.336C3.76239 24.7623 3.64866 25.9754 4.05125 26.9124C4.40491 27.7356 5.02467 28.4162 5.8112 28.8451C6.70655 29.3334 7.925 29.3334 10.3619 29.3334H21.6391C24.076 29.3334 25.2945 29.3334 26.1898 28.8451C26.9764 28.4162 27.5961 27.7356 27.9498 26.9124C28.3524 25.9754 28.2386 24.7623 28.0112 22.336L27.2112 13.8027C27.0191 11.7539 26.9231 10.7295 26.4623 9.95497C26.0565 9.27286 25.457 8.7269 24.74 8.38654C23.9258 8.00008 22.8969 8.00008 20.8391 8.00008L11.1619 8.00008C9.1041 8.00008 8.07519 8.00008 7.26107 8.38654C6.54407 8.72689 5.94452 9.27286 5.53873 9.95496C5.07797 10.7295 4.98193 11.7539 4.78985 13.8027Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>$105.64</p>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-16 w-full pt-6 bg-[#235D55] flex flex-col items-center justify-between">
        <Footer />
      </div>
    </>
  );
}
