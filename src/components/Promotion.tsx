import React from "react";

type PromotionItem = {
  id: number;
  title: string;
  discount: string;
  description: string;
};

type Props = {
  datas: PromotionItem[];
};

export default function Promotion({ datas }: Props) {
  return (
    <>
      {datas?.map((item, index) => (
        <>
          <div className={`pb-6 mr-8 w-full flex flex-col`}>
            <div className="flex text-center items-center justify-start lg:justify-center">
              <div className=" bg-red-500 w-[47px] h-[16px] text-xs text-center text-white font-semibold mr-6">
                {item.title}
              </div>
              <div className="text-4xl font-bold">{item.discount}</div>
            </div>
            <div className="items-center font-medium justify-center text-start lg:text-center">
              {item.description}
            </div>
          </div>
          {datas.length - 1 > index && (
            <div className="my-auto border-r-2 h-12 mr-8 border-black"></div>
          )}
        </>
      ))}
      <div className="hidden lg:block my-auto">
        <div className="w-[221px] h-[30px] text-sm flex text-center items-center justify-center bg-red-600 text-white">
          SALEVOUCHER:FINDYOURIDEA
        </div>
      </div>
    </>
  );
}
