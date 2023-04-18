import React from "react";

type VoucherItem = {
  id: number;
  title: string;
  description: string;
};

type Props = {
  datas: VoucherItem[];
};

export default function Voucher({ datas }: Props) {
  return (
    <>
      {datas?.map((item, index) => (
        <div
          className={`flex items-center justify-between w-full pb-6 ${
            datas.length - 1 > index && "md:mr-3"
          }`}
          key={item.id}
        >
          <div className="w-full h-[180px] rounded-[30px] bg-inherit border border-[#235D55]">
            <div className="px-4 md:px-2 py-3 flex items-center justify-between">
              <div className="min-w-[220px] md:min-w-[160px] lg:min-w-[200px] h-[36px] rounded-full border border-[#235D55] flex items-center justify-center text-[#235D55] font-medium text-xl md:text-base md:mr-1 lg:text-xl">
                {item.title}
              </div>
              <div>
                <svg
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="13.5" cy="13" rx="13.5" ry="13" fill="#235D55" />
                  <path
                    d="M12.825 19.384C12.6482 19.2138 12.5556 18.9971 12.5473 18.734C12.5389 18.4709 12.6235 18.2543 12.8009 18.084L17.5259 13.534H6.74999C6.47678 13.534 6.2476 13.4449 6.06246 13.2666C5.87732 13.0883 5.78507 12.8679 5.78571 12.6055C5.78571 12.3424 5.87828 12.1217 6.06342 11.9434C6.24857 11.7651 6.47742 11.6763 6.74999 11.6769H17.5259L12.8009 7.12689C12.6241 6.95665 12.5396 6.73999 12.5473 6.47689C12.555 6.2138 12.6476 5.99713 12.825 5.82689C13.0018 5.65665 13.2268 5.57153 13.5 5.57153C13.7732 5.57153 13.9982 5.65665 14.175 5.82689L20.5393 11.9555C20.6357 12.0328 20.7042 12.1297 20.7447 12.2461C20.7852 12.3625 20.8051 12.4823 20.8045 12.6055C20.8045 12.7293 20.7845 12.8453 20.7447 12.9537C20.7048 13.062 20.6364 13.1626 20.5393 13.2555L14.175 19.384C13.9982 19.5543 13.7732 19.6394 13.5 19.6394C13.2268 19.6394 13.0018 19.5543 12.825 19.384Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full h-[90px] px-4 md:px-2 py-3 overflow-hidden">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
