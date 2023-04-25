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
              Free shipping
            </button>
            <button className="px-10 py-2 mr-3 text-white bg-[#235D55] rounded-full">
              100% Refund
            </button>
            <p className="text-lg font-thin italic">Choose a voucher</p>
          </div>
        </div>

        <div className="mx-6 border-r-2 h-24 border-black"></div>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex items-center justify-center text-black">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.07422 2.97504H4.511C4.78162 2.97504 4.91693 2.97504 5.02582 3.0248C5.12178 3.06866 5.2031 3.13918 5.26008 3.22798C5.32475 3.32873 5.34388 3.46269 5.38215 3.73059L5.90279 7.37504M5.90279 7.37504L7.05987 15.8796C7.2067 16.9588 7.28012 17.4984 7.53813 17.9046C7.76547 18.2625 8.09141 18.5471 8.47671 18.7241C8.91397 18.925 9.45856 18.925 10.5477 18.925H19.9614C20.9982 18.925 21.5166 18.925 21.9403 18.7385C22.3138 18.574 22.6343 18.3089 22.8657 17.9727C23.1282 17.5914 23.2252 17.0822 23.4192 16.0637L24.8752 8.4197C24.9435 8.06122 24.9777 7.88199 24.9282 7.74189C24.8848 7.61898 24.7991 7.51549 24.6865 7.44986C24.5581 7.37504 24.3757 7.37504 24.0108 7.37504H5.90279ZM11.8742 23.875C11.8742 24.4826 11.3817 24.975 10.7742 24.975C10.1667 24.975 9.67422 24.4826 9.67422 23.875C9.67422 23.2675 10.1667 22.775 10.7742 22.775C11.3817 22.775 11.8742 23.2675 11.8742 23.875ZM20.6742 23.875C20.6742 24.4826 20.1817 24.975 19.5742 24.975C18.9667 24.975 18.4742 24.4826 18.4742 23.875C18.4742 23.2675 18.9667 22.775 19.5742 22.775C20.1817 22.775 20.6742 23.2675 20.6742 23.875Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="text-4xl font-medium ml-6">$105.64</p>
          </div>
          <button className="px-10 py-2 my-3 text-white bg-[#235D55] rounded-full">
            Purchase
          </button>
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-16 w-full pt-6 bg-[#235D55] flex flex-col items-center justify-between">
        <Footer />
      </div>
    </>
  );
}
